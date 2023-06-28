import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Column({ name: 'first_name', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', length: 100 })
  lastName: string;

  @Column({ name: 'password', length: 100 })
  password: string;

  @Column({ name: 'email', length: 100 })
  email: string;

  @Column({ name: 'phone', default: 0 })
  phone: string;

  @Column({ name: 'dni', length: 50 })
  dni: string;
}
