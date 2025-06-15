import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LinksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLinkDto: CreateLinkDto) {
    const userFound = await this.prismaService.user.count({
      where: { id: createLinkDto.userId },
    });
    if (!userFound) {
      throw new NotFoundException(
        `User with ID ${createLinkDto.userId} not found`,
      );
    }
    return this.prismaService.link.create({
      data: createLinkDto,
    });
  }

  async findAll(userId: number) {
    const userFound = await this.prismaService.user.count({
      where: { id: userId },
    });
    if (!userFound) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return this.prismaService.link.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    const linkFound = await this.prismaService.link.findUnique({
      where: { id },
    });
    if (!linkFound) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return linkFound;
  }

  async update(id: number, updateLinkDto: UpdateLinkDto) {
    const linkFound = await this.prismaService.link.count({
      where: { id },
    });
    if (!linkFound) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return this.prismaService.link.update({
      data: updateLinkDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const linkFound = await this.prismaService.link.count({
      where: { id },
    });
    if (!linkFound) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return this.prismaService.link.delete({ where: { id } });
  }
}
