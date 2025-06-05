import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBountyDto {
  @IsString()
  title;

  @IsString()
  description;

  @IsString()
  target;

  @IsString()
  planet;

  @IsNumber()
  reward;

  @IsOptional()
  @IsString()
  image
}
