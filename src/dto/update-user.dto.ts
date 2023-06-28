import { IsOptional, IsString } from '@nestjs/class-validator';
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

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  phone: string;

  @IsString({ message: 'DNI must be a string.' })
  @IsOptional()
  dni: string;
}
