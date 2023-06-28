import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from '@nestjs/class-validator';

import { Classification } from '../enums/classification.enum';
import { Matches } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'First name must be a string.' })
  @IsOptional()
  firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsOptional()
  lastName: string;

  @IsString({ message: 'Password must be a string.' })
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString({ message: 'Email must be a string.' })
  @IsOptional()
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
  @IsOptional()
  classification: Classification;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  phone: string;

  @IsString({ message: 'DNI must be a string.' })
  @IsOptional()
  dni: string;

  @IsString({ message: 'Nickname must be a string.' })
  @IsOptional()
  username: string;
}
