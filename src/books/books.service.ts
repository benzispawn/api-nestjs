/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from "./db/Books";
import { Repository } from "typeorm";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private booksRepository: Repository<Books>,
    ) {}

    findAll(): Promise<Books[]> {
        return this.booksRepository.find();
    }

    findOne(bid: number): Promise<Books> {
        return this.booksRepository.findOneBy({ bid });
    }

    async remove(bid: string): Promise<void> {
        await this.booksRepository.delete(bid);
    }

}