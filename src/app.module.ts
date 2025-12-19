import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // 指定环境文件路径
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
