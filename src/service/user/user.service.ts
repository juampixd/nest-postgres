import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../persistence/user.entity';
import { Repository } from 'typeorm';
import { DataBasesEnum } from '../../enums/data-bases.enum';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, DataBasesEnum.POSTGRES)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }
  catch(error) {
    throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findUserById(id: string): Promise<UserEntity> {
    const found = await this.userRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return found;
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const user: UserEntity = await this.findUserById(id);
    this.userRepository.merge(user, data);
    return this.userRepository.save(user);
  }
}
