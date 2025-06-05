import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { genSalt, hash, compare } from 'bcrypt';
import { Roles } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) { }

  async create(dto: CreateAuthDto) {
    const salt = await genSalt(10);

    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: await hash(dto.password, salt),
        role: dto.role || Roles.USER,
      },
    });

    return {
      message: `User with ${dto.email} was created`,
    };
  }

  async login(email: string) {
    const user = await this.findOne(email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const payload = { sub: user.id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.findOne(email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) {
      throw new HttpException('Wrong Password', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}
