import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({
    length: 50,
  })
  uname: string;
}
