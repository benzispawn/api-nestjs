/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './db/Books';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Books])],
    providers: [BooksService],
    controllers: [BooksController],
    exports: [TypeOrmModule]
})
export class BooksModule {}
