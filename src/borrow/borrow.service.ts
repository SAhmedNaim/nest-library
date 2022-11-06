import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { Borrow, BorrowDocument } from './schemas/borrow.schema';
import { CreateBorrowDTO } from './dtos/create-borrow.dto';

@Injectable()
export class BorrowService {
    constructor(@InjectModel('Borrow') private readonly borrowModel: Model<BorrowDocument>) {}
    
    async getAllBorrows(type: string, limit: number): Promise<Borrow[]> {
        const borrows = await this.borrowModel.find().where({ type: type }).limit(limit).sort({ _id: -1 }).limit(limit).exec();
        return borrows;
    }
    
    async getBorrow(id: string): Promise<Borrow> {
        const borrow = await this.borrowModel.findById(id).exec();
        return borrow;
    }
    
    async addBorrow(createBorrowDTO: CreateBorrowDTO): Promise<Borrow> {
        const newBorrow = await this.borrowModel.create(createBorrowDTO);
        return newBorrow.save();
    }
    
    async updateBorrow(id: string, createBorrowDTO: CreateBorrowDTO): Promise<Borrow> {
        const updatedBorrow = await this.borrowModel
          .findByIdAndUpdate(id, createBorrowDTO, { new: true });
        return updatedBorrow;
    }
    
    async deleteBorrow(id: string): Promise<any> {
        const deletedBorrow = await this.borrowModel.findByIdAndRemove(id);
        return deletedBorrow;
    }
}
