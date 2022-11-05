import { Date } from "mongoose";

export class CreateBookDTO {
    name: string;
    cover: string;
    introduction: string;
    author: string;
    quantity: number;
    classification: string;
    crowd: string;
    publish_date: Date;
    storage_date: Date;
    availability: boolean;
}
