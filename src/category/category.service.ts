import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<CategoryDocument>) {}

    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryModel.find().exec();
        return categories;
    }

    async getCategory(id: string): Promise<Category> {
        const category = await this.categoryModel.findById(id).exec();
        return category;
    }

    async addCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const newCategory = await this.categoryModel.create(createCategoryDto);
        return newCategory.save();
    }

    async updateCategory(id: string, createCategoryDto: CreateCategoryDto): Promise<Category> {
        const updateCategory = await this.categoryModel
          .findByIdAndUpdate(id, createCategoryDto, { new: true });
        return updateCategory;
    }

    async deleteCategory(id: string): Promise<any> {
        const deletedCategory = await this.categoryModel.findByIdAndRemove(id);
        return deletedCategory;
    }
}
