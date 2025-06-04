import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT: string = process.env.PORT || '3000';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // This is crucial for type conversion
  }));
  app.enableCors();

  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
