import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
//import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controller/controller.module';
import { DataBasesEnum } from './enums/data-bases.enum';
import { GuardModule } from './guard/guard.module';
import { ServiceModule } from './service/service.module';
import { dataSourceOptions } from 'db/data-source';

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
