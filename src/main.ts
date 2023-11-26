import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set the global validation for request using pipes
  // Whitelist is for get data from request where is same as we define only in dto
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(8080);
}
bootstrap();
