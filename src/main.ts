import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ErrorsInterceptor } from './config/error.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
      // disableErrorMessages: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const keys = Object.keys(errors[0].constraints);
        return new BadRequestException(errors[0].constraints[keys[0]]);
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('The GC')
    .setDescription('The GC API description')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'GC API Docs',
  };
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(5000);
}
bootstrap();
