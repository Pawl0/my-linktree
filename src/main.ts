import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    console.log('🔧 Starting application...');
    console.log('📍 NODE_ENV:', process.env.NODE_ENV);
    console.log('🔌 PORT:', process.env.PORT);

    const app = await NestFactory.create(AppModule);
    console.log('✅ NestJS app created');

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    console.log('✅ CORS enabled');

    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Server successfully started on port ${port}`);
    console.log(`🌐 Listening on http://0.0.0.0:${port}`);
  } catch (error) {
    console.error('❌ Bootstrap error:', error);
    console.error('❌ Stack trace:', error.stack);
    process.exit(1);
  }
}
bootstrap();
