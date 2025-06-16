import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: { email, password },
    });
    if (!user) {
      throw new UnauthorizedException('E-mail or password is invalid.');
    }
    const payload = { userId: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
