import { Controller, Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dtos/create-book.dto';
import { SearchBookDTO } from './dtos/search-book.dto';

@Controller('api/books')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get('/')
    async getBooks(@Query() queryString: SearchBookDTO) {
        const { latest } = queryString;
        const allBooks = await this.bookService.getAllBooks(latest);
        return allBooks;
    }

    @Get('/:id')
    async getBook(@Param('id') id: string) {
        const book = await this.bookService.getBook(id);
        if (!book) throw new NotFoundException('Book does not exist!');
        return book;
    }

    @Post('/')
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.bookService.addBook(createBookDTO);
        return book;
    }

    @Put('/:id')
    async updateBook(@Param('id') id: string, @Body() createBookDTO: CreateBookDTO) {
        const book = await this.bookService.updateBook(id, createBookDTO);
        if (!book) throw new NotFoundException('Book does not exist!');
        return book;
    }

    @Delete('/:id')
    async deleteBook(@Param('id') id: string) {
        const book = await this.bookService.deleteBook(id);
        if (!book) throw new NotFoundException('Book does not exist!');
        return book;
    }
}
