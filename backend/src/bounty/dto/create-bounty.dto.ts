import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBountyDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsString()
  target: string

  @IsString()
  planet: string

  @IsNumber()
  reward: number

  @IsOptional()
  @IsString()
  image: string
}
