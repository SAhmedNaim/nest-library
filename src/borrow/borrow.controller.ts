import { Controller, Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { CreateBorrowDTO } from './dtos/create-borrow.dto';
import { SearchBorrowDTO } from './dtos/search-borrow.dto';

@Controller('api/borrows')
export class BorrowController {
    constructor(private borrowService: BorrowService) { }

    @Get('/')
    async getBorrows(@Query() queryString: SearchBorrowDTO) {
        const { type, limit } = queryString;
        
        const allBorrows = await this.borrowService.getAllBorrows(type, limit);
        return allBorrows;
    }

    @Get('/:id')
    async getBorrow(@Param('id') id: string) {
        const borrow = await this.borrowService.getBorrow(id);
        if (!borrow) throw new NotFoundException('Borrow does not exist!');
        return borrow;
    }

    @Post('/')
    async addBorrow(@Body() createBorrowDTO: CreateBorrowDTO) {
        const borrow = await this.borrowService.addBorrow(createBorrowDTO);
        return borrow;
    }

    @Put('/:id')
    async updateBorrow(@Param('id') id: string, @Body() createBorrowDTO: CreateBorrowDTO) {
        const borrow = await this.borrowService.updateBorrow(id, createBorrowDTO);
        if (!borrow) throw new NotFoundException('Borrow does not exist!');
        return borrow;
    }

    @Delete('/:id')
    async deleteBorrow(@Param('id') id: string) {
        const borrow = await this.borrowService.deleteBorrow(id);
        if (!borrow) throw new NotFoundException('Borrow does not exist');
        return borrow;
    }
}
