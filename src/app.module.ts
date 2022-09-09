import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppDbConfig } from './config/config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDbConfig),
  ],
  controllers: [AppController],
})
export class AppModule {}
