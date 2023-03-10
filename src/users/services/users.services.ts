/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entity/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(uid: number): Promise<Users> {
    return this.usersRepository.findOneBy({ uid });
  }

  async remove(uid: string): Promise<void> {
    await this.usersRepository.delete(uid);
  }
}
