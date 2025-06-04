import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsString } from 'class-validator';

export class LoginAuthDto extends PartialType(CreateAuthDto) {
  @IsString()
  email;

  @IsString()
  password;
}
