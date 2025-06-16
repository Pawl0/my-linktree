import { Module } from '@nestjs/common';
import { LinksModule } from './admin/links/links.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { LinkModule } from './links/links.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LinksModule, UsersModule, LinkModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
