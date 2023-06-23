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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: DataBasesEnum.POSTGRES,
      type: DataBasesEnum.POSTGRES,
      host: 'db',
      port: 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'nestpostgres',
      database: process.env.DB_NAME || 'users',
      entities: [__dirname + '/persistence/*.entity{.ts,.js}'],
      synchronize: true,
    }),
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
