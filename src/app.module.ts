import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/library'),
        BookModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
