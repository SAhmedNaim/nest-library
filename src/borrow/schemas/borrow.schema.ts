import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type BorrowDocument = Borrow & Document;

@Schema()
export class Borrow {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'Book' })
    bookId: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userId: string;

    @Prop()
    quantity: number;

    @Prop()
    type: string;

    @Prop()
    issue_date: string;
}

export const BorrowSchema = SchemaFactory.createForClass(Borrow);
