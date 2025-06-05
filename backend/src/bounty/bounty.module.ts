import { Module } from '@nestjs/common';
import { BountyService } from './bounty.service';
import { BountyController } from './bounty.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [BountyController],
  providers: [BountyService],
  imports: [PrismaModule, AuthModule]
})
export class BountyModule { }
