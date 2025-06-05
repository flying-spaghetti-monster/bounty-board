import { Controller, Get, Post, Body, HttpStatus, HttpException, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/find-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('registration')
  async create(@Body() dto: CreateAuthDto) {
    const oldUser = await this.authService.findOne(dto.email);

    if (oldUser) {
      return new HttpException(`User ${dto.email} alredy registered`, HttpStatus.BAD_REQUEST);
    }

    return this.authService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginAuthDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.login(user.email);
  }
}
