import { Controller, Get, Param } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get(':username')
  findAll(@Param('username') username: string) {
    return this.linksService.findAll(username);
  }
}
