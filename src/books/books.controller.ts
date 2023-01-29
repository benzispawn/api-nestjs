/* eslint-disable prettier/prettier */

import { Controller, Get } from "@nestjs/common";
import { Books } from "./db/Books";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}
    @Get()
    findAll(): Promise<Books[]> {
        return this.booksService.findAll();
    }
}