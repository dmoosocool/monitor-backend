import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  @Length(4, 64, { message: 'Error: Your username must be between 4 and 64 characters.' })
  username: string;

  @Column({ length: 100 })
  @Length(6, 100, { message: 'Error: Your Email Address must be between 4 and 100 characters.' })
  @IsEmail({}, { message: 'Error: Your Email Address is invalid format.' })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  isDeleted: boolean;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;
}
