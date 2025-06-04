import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const JWTConfigs = async (configService: ConfigService): Promise<JwtModuleOptions> => ({
  global: true,
  secret: configService.get<string>('JWT_SECRET'),
  signOptions: {
    expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '60s',
  },
});
