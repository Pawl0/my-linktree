import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LinksService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(username: string) {
    return this.prismaService.link.findMany({ where: { user: { username } } });
  }
}
