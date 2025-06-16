import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from 'src/auth/jwt-strategy.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService, PrismaService],
})
export class LinkModule {}
