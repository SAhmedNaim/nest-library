import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import {CategoryModule} from "./category/category.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/library'),
        BookModule,
        CategoryModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
