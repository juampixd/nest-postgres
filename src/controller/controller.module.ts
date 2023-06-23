import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service.module';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { UserController } from './user/user.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [ServiceModule, HttpModule],
  controllers: [HealthcheckController, UserController],
})
export class ControllersModule {}
