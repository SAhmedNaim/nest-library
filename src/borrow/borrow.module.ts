import { Module } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { BorrowController } from './borrow.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BorrowSchema } from './schemas/borrow.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Borrow', schema: BorrowSchema }])
  ],
  providers: [BorrowService],
  controllers: [BorrowController]
})
export class BorrowModule {}
