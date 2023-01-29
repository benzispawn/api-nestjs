/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Users } from '../entity/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.services';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule]
})
export class UsersModule {}
