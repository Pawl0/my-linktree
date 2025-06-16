import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: createUserDto,
      });
    } catch (error) {
      console.error(error.message);
      if (error.message.includes('Unique')) {
        if (error.message.includes('username')) {
          throw new ConflictException(
            'An user with this username already exists.',
          );
        }
        if (error.message.includes('email')) {
          throw new ConflictException(
            'An user with this e-mail already exists.',
          );
        }
      }
      throw error;
    }
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const userFound = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return userFound;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.prismaService.user.count({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.prismaService.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const userFound = await this.prismaService.user.count({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.prismaService.user.delete({ where: { id } });
  }
}
