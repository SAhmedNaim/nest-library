import { Date } from "mongoose";

export class CreateBookDTO {
    categoryId: string;
    name: string;
    cover: string;
    price: number;
    introduction: string;
    author: string;
    quantity: number;
    classification: string;
    crowd: string;
    publish_date: Date;
    storage_date: Date;
    availability: boolean;
}
