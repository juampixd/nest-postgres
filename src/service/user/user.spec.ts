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

      expect(userRepository.save).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const mockUsers: UserEntity[] = [];

      jest.spyOn(userService, 'findAll').mockResolvedValue(mockUsers);

      const result = await userService.findAll();

      expect(result).toEqual(mockUsers);
      expect(userService.findAll).toHaveBeenCalledWith();
    });
  });

  describe('find', () => {
    it('should return the user with the specified id', async () => {
      const id = '12345';
      const mockUser: UserEntity = {
        id: id,
        firstName: 'Jon',
        lastName: 'Doe',
        password: 'jonDoe123@',
        email: 'jon@email.com',
        phone: '74564575',
        dni: '123'
      };

      jest.spyOn(userService, 'findUserById').mockResolvedValue(mockUser);

      const result = await userService.findUserById(id);

      expect(result).toEqual(mockUser);
      expect(userService.findUserById).toHaveBeenCalledWith(id);
    })
  });

  describe('updateUser', () => {
    it('should update the user with the specified id and the user specified', async () => {
      const mockUser: UserEntity = {
        id: "12345",
        firstName: 'Jon',
        lastName: 'Doe',
        password: 'jonDoe123@',
        email: 'jon@email.com',
        phone: '74564575',
        dni: '123'
      };

      const updatedUser: UserEntity = {
        id: "12345",
        firstName: 'Jane',
        lastName: 'Doe',
        password: 'janeDoe123@',
        email: 'jane@email.com',
        phone: '79875654',
        dni: '23456'
      };

      jest.spyOn(userService, 'updateUser').mockResolvedValue(updatedUser);

      const result = await userService.updateUser(mockUser.id, updatedUser);
      expect(result).toEqual(updatedUser);
      expect(userService.updateUser).toHaveBeenCalledWith(mockUser.id, updatedUser);


    })
  })

  describe('deleteUser', () => {
    it('should delete the user with the specified id', async () => {
      const id = '12345';
      
      jest.spyOn(userService, 'deleteUser').mockResolvedValue();


      const result = await userService.deleteUser(id);
      expect(result).toBeUndefined();
      expect(userService.deleteUser).toHaveBeenCalledWith(id);
    })
  });
});
