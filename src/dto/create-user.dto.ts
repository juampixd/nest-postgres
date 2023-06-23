import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Classification } from '../enums/classification.enum';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'Please provide a first name.' })
  @ApiProperty({ type: String, description: 'firstName' })
  firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Please provide a last name.' })
  @ApiProperty({ type: String, description: 'lastName' })
  lastName: string;

  @IsString({ message: 'password must be a string.' })
  @IsNotEmpty({ message: 'Please provide a password.' })
  @ApiProperty({ type: String, description: 'password' })
  password: string;

  @IsEmail({})
  @IsNotEmpty({ message: 'Please provide an Email.' })
  @ApiProperty({ type: String, description: 'email' })
  email: string;

  @IsEnum(
    [
      Classification.DEV,
      Classification.QA,
      Classification.QA_LEAD,
      Classification.DEV_LEAD,
      Classification.PM,
      Classification.PO,
      Classification.RRHH,
      Classification.EM,
      Classification.MARKETING,
    ],
    {
      each: true,
      message: 'Classification entered is not available.',
    },
  )
  @ApiProperty({
    enum: Classification,
    isArray: true,
    description: 'classification',
  })
  classification: Classification;

  @IsNotEmpty({ message: 'Please provide a address.' })
  @IsNumber()
  @ApiProperty({ type: Number, description: 'phone' })
  phone: number;

  @IsString({ message: 'DNI must be a string.' })
  @IsNotEmpty({ message: 'Please provide a DNI.' })
  @ApiProperty({ type: String, description: 'dni' })
  dni: string;

  @IsString({ message: 'Nickname must be a string.' })
  @IsNotEmpty({ message: 'Please provide a nickname.' })
  @ApiProperty({ type: String, description: 'nickname' })
  username: string;

  @IsOptional()
  @Min(0, { message: 'Status must be 1 for active or 0 for innactive.' })
  @Max(1, { message: 'Status must be 1 for active or 0 for innactive.' })
  @IsInt({ message: 'Status must be an integer.' })
  @ApiProperty({ type: Number, description: 'status' })
  status: number;
}
