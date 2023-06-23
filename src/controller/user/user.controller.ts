import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from 'src/persistence/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create users.' })
  @ApiResponse({
    status: 201,
    description: 'user was created.',
    type: UserEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Any users were found.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get user data.' })
  @ApiResponse({
    status: 200,
    description: 'User request succeeded.',
    type: UserEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Any user were found.',
  })
  findAll() {
    return this.userService.findAll();
  }
}
