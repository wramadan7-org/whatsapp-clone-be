import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { BookService } from 'src/books/books.service';

@Module({
  controllers: [ExceptionController],
  providers: [BookService],
})
export class ExceptionModule {}
