import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealth(): string {
    return 'API is running!';
  }

  @Get('health')
  healthCheck(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      port: process.env.PORT,
    };
  }
}
