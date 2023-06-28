import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from 'src/persistence/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { IsUUID } from 'class-validator';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.findUserById(id);
  }

  @Patch('/:id')
  updateTaskStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() userData: UpdateUserDto,
  ) {
    return this.userService.updateTaskStatus(id, userData);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser(id);
  }
}
