import { PartialType } from '@nestjs/mapped-types';
import { CreateBountyDto } from './create-bounty.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class FindBountyDto extends PartialType(CreateBountyDto) {
  @IsString()
  @IsOptional()
  planet?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  take?: number

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  personalOnly: boolean
}
