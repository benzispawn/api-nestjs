/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  bid: number;

  @Column({
    length: 50,
  })
  bnome: string;

  @Column()
  bdata_publica: Date;

  @Column()
  uid: number;

  @Column()
  bdata_add: Date;
}
