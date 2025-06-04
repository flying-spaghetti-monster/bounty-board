import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Roles } from 'generated/prisma';

export class CreateAuthDto {
  @IsString()
  email;

  @IsString()
  password;

  @IsEnum(Roles, { message: 'role must be a valid enum value (USER, ADMIN) : if empty user by default' })
  @IsOptional()
  role?: Roles;
}
