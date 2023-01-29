/* eslint-disable prettier/prettier */

import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.services';
import { Users } from '../../entity/User';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param() params): Promise<Users> {
        return this.usersService.findOne(params.id);
    }
}
