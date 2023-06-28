import { IsNotEmpty, IsPhoneNumber, IsString } from '@nestjs/class-validator';
import { Matches } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'Please provide a first name.' })
  firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Please provide a last name.' })
  lastName: string;

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Please provide a password.' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString({ message: 'Email must be a string.' })
  @IsNotEmpty({ message: 'Please provide an Email.' })
  email: string;

  @IsString({ message: 'Phone must be a string.' })
  @IsPhoneNumber('BO')
  @IsNotEmpty({ message: 'Please provide a address.' })
  phone: string;

  @IsString({ message: 'DNI must be a string.' })
  @IsNotEmpty({ message: 'Please provide a DNI.' })
  dni: string;
}
