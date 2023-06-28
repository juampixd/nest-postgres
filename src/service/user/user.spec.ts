import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../../persistence/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;
  const REPOSITORY_USER = getRepositoryToken(UserEntity, 'postgres');

  const mockUserRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  // const token = {
  //   firstName: 'Mauei',
  //   lastName: 'Kikiua',
  //   password: 'nepelo',
  //   email: 'sergio@gmail.com',
  //   classification: 'DEV',
  //   phone: 75252723,
  //   dni: '61728833',
  //   username: 'kakacha',
  //   status: 1,
  //   id: '57093091-d86a-4b6d-9c06-52e94d84cb97',
  // };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: REPOSITORY_USER,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(REPOSITORY_USER);
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const newUser = new CreateUserDto();

      await userService.create(newUser);

      await userService.create(newUser);
      expect(userRepository.save).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return all users with status 1', async () => {
      const mockUsers: UserEntity[] = [];

      jest.spyOn(userRepository, 'find').mockResolvedValue(mockUsers);

      const result = await userService.findAll();

      expect(result).toEqual(mockUsers);
      expect(userRepository.find).toHaveBeenCalledWith({
        where: { status: 1 },
      });
    });
  });
});
