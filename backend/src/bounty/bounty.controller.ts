import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { BountyService } from './bounty.service';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { AuthGuard } from 'src/guards/jwt.guard';
import { UserId } from 'src/decorator/user-id.decorator';
import { FindBountyDto } from './dto/find-bounty.dto';

@Controller('bounty')
export class BountyController {
  constructor(private readonly bountyService: BountyService) { }

  @Get()
  findAll(@Query() dto: FindBountyDto) {
    return this.bountyService.findAll(dto);
  }

  @UseGuards(AuthGuard)
  @Post()
  findPersonalAll(@Query() dto: FindBountyDto, @UserId() userId: string) {
    return this.bountyService.findAll(dto, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bountyService.findOne(id);
  }


  @UseGuards(AuthGuard)
  @Post('create')
  create(@UserId() userId: string, @Body() dto: CreateBountyDto) {
    return this.bountyService.create(userId, dto);
  }

  @UseGuards(AuthGuard)
  @Get('/accept/:id')
  accept(@UserId() userId: string, @Param('id') id: string) {
    return this.bountyService.accept(userId, id);
  }

}
