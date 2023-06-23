import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBasesEnum } from 'src/enums/data-bases.enum';
import { UserEntity } from 'src/persistence/user.entity';
import { UserService } from './user/user.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity], DataBasesEnum.POSTGRES),
    HttpModule,
  ],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
