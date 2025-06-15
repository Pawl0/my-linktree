import { Module } from '@nestjs/common';
import { LinksModule } from './admin/links/links.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
