import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { ExceptionModule } from 'src/exceptions/exception.module';

@Module({
  imports: [ExceptionModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
