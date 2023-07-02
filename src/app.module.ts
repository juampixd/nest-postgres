import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controller/controller.module';
import { GuardModule } from './guard/guard.module';
import { ServiceModule } from './service/service.module';
import { dataSourceOptions } from 'db/data-source';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './utils/http-filter/http.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ControllersModule,
    ServiceModule,
    GuardModule,
    HttpModule,

    // ClientsModule.register([
    //   {
    //     name: 'TEAM_SERVICE',
    //     transport: Transport.TCP
    //   }
    // ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
