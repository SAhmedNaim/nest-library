import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import {CategoryModule} from "./category/category.module";
import {UserModule} from "./user/user.module";
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/library'),
        UserModule,
        AuthModule,
        BookModule,
        CategoryModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
