import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service.module';
import { UserController } from './user/user.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ServiceModule, HttpModule],
  controllers: [UserController],
})
export class ControllersModule {}
