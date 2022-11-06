import { Controller, Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('api/categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get('/')
    async getCategories() {
        const allCategories = await this.categoryService.getAllCategories();
        return allCategories;
    }

    @Get('/:id')
    async getCategory(@Param('id') id: string) {
        const category = await this.categoryService.getCategory(id);
        if (!category) throw new NotFoundException('Category does not exist!');
        return category;
    }

    @Post('/')
    async addCategory(@Body() createCategoryDto: CreateCategoryDto) {
        const category = await this.categoryService.addCategory(createCategoryDto);
        return category;
    }

    @Put('/:id')
    async updateCategory(@Param('id') id: string, @Body() createCategoryDto: CreateCategoryDto) {
        const category = await this.categoryService.updateCategory(id, createCategoryDto);
        if (!category) throw new NotFoundException('Category does not exist!');
        return category;
    }

    @Delete('/:id')
    async deleteCategory(@Param('id') id: string) {
        const category = await this.categoryService.deleteCategory(id);
        if (!category) throw new NotFoundException('Category does not exist');
        return category;
    }
}
