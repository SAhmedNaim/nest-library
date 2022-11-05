import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    name: string;

    @Prop()
    cover: string;

    @Prop()
    price: number;

    @Prop()
    introduction: string;

    @Prop()
    author: string;

    @Prop()
    quantity: number;

    @Prop()
    classification: string;

    @Prop()
    crowd: string;

    @Prop()
    publish_date: string;

    @Prop()
    storage_date: string;

    @Prop()
    availability: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
