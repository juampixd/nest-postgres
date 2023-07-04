import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';

describe('User Integration Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return a user by ID', async () => {
    const userId = 'f9d7a0e8-da9e-4389-86fc-3ffe99b1321b';
    const response = await request(app.getHttpServer()).get(`/users/${userId}`);

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toEqual({
      id: userId,
      firstName: 'Juan',
      lastName: 'Topo',
      password: 'Qjuan123',
      email: 'juan@email.com',
      phone: '78446512',
      dni: '456789'
    });
  });
});
