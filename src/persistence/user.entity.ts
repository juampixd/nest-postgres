import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Classification } from '../enums/classification.enum';

@Entity('users')
export class UserEntity {
  @ApiProperty({
    description: 'UUID',
    example: '724949a9-81c7-424d-abc8-73f170d6ca21',
    uniqueItems: true,
    type: String,
  })
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id?: string;

  @ApiProperty({
    description: 'user first name',
    example: 'Rodrigo',
    type: String,
  })
  @Column({ name: 'first_name', length: 100 })
  firstName: string;

  @ApiProperty({
    description: 'user last name',
    example: 'Cuellar Arce',
    type: String,
  })
  @Column({ name: 'last_name', length: 100 })
  lastName: string;

  @ApiProperty({
    description: 'user password',
    example: '*******',
    type: String,
  })
  @Column({ name: 'password', length: 100 })
  password: string;

  @ApiProperty({
    description: 'user email',
    example: 'cuellar@email.com',
    type: String,
  })
  @Column({ name: 'email', length: 100, unique: true })
  email: string;

  @ApiProperty({
    enum: [
      'Dev',
      'QA',
      'Project Manager',
      'Product Owner',
      'QA_Lead',
      'DEV_Lead',
      'PM',
      'PO',
      'RRHH',
      'Marketing',
    ],
    description: 'user job',
  })
  @Column({
    type: 'enum',
    enum: Classification,
  })
  classification: Classification;

  @ApiProperty({
    description: 'user phone (int)',
    example: '78885421',
    type: Number,
  })
  @Column('int', { name: 'phone', default: 0 })
  phone: number;

  @ApiProperty({
    description: 'user DNI',
    example: '5064548-SC',
    uniqueItems: true,
    type: String,
  })
  @Column({ name: 'dni', length: 50, unique: true })
  dni: string;

  @ApiProperty({
    description: 'user username',
    example: 'Nacho',
    type: String,
  })
  @Column({ name: 'nickname' })
  username: string;

  @ApiProperty({
    description: 'status 0 Inactive and 1 Active',
    default: 1,
    example: '1',
    type: Number,
  })
  @Column('int', { default: 1 })
  status: number;
}
