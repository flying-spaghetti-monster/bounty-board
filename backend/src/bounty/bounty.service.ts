import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { getRandomColor } from '../helper/helper';
import { FindBountyDto } from './dto/find-bounty.dto';

@Injectable()
export class BountyService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, dto: CreateBountyDto) {
    const imageColor = dto.image.substring(1) || getRandomColor();

    const newBounty = await this.prisma.bounty.create({
      data: {
        ...dto,
        image: `https://img.icons8.com/ios/50/${imageColor}/earth-planet.png`,
        creatorId: userId
      }
    });

    return newBounty;
  }

  async findAll(dto: FindBountyDto, userId?) {
    const args: any = {};
    const filter: any = {};

    // Pagination
    if (dto.take) {
      args.skip = dto.page ? (dto.page - 1) * dto.take : 0;
      args.take = dto.take;
    }

    // Filters
    const where: any = {};
    if (dto.planet) {
      where.planet = dto.planet;
    }
    if (dto.status) {
      where.status = dto.status;
    }
    if (dto.personalOnly && userId) {
      where.OR = [
        { creatorId: userId },
        { acceptedById: userId },
      ];
    }

    if (Object.keys(where).length > 0) {
      args.where = where;
    }

    const bounties = await this.prisma.bounty.findMany(args);
    const totalBounties = await this.prisma.bounty.count();

    return {
      items: bounties,
      total: totalBounties,
      totalPages: dto.take ? Math.ceil(totalBounties / dto.take) : null,
    };
  }

  findOne(id: string) {
    const bounty = this.prisma.bounty.findUnique({
      where: { id }
    });

    return bounty;
  }

  async accept(userId: string, id: string) {
    const existBounty = await this.prisma.bounty.findUnique({
      where: { id },
    });

    if (!existBounty) {
      throw new NotFoundException('Bounty not found');
    }

    if (existBounty.status === 'accepted') {
      throw new ForbiddenException('This bounty is already accepted');
    }

    await this.prisma.bounty.update({
      where: { id },
      data: {
        status: 'accepted',
        acceptedById: userId,
      },
    });

    return {
      message: 'Bounty updated'
    };
  }
}
