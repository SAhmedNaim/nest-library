import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDTO } from './dtos/create-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<BookDocument>) { }

    async getAllBooks(latest: number): Promise<Book[]> {
        const books = await this.bookModel.find().sort({ _id: -1 }).limit(latest).exec();
        return books;
    }
    
    async getBook(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        return book;
    }
    
    async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
        const newBook = await this.bookModel.create(createBookDTO);
        return newBook.save();
    }
    
    async updateBook(id: string, createBookDTO: CreateBookDTO): Promise<Book> {
        const updatedBook = await this.bookModel
            .findByIdAndUpdate(id, createBookDTO, { new: true });
        return updatedBook;
    }
    
    async deleteBook(id: string): Promise<any> {
        const deletedBook = await this.bookModel.findByIdAndRemove(id);
        return deletedBook;
    }
}
