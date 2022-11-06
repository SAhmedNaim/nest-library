import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    name: string;

    @Prop()
    slug: string;

    @Prop()
    status: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
