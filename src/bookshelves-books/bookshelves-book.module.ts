import { Module } from '@nestjs/common';
import { BookshelvesBookController } from './bookshelves-book.controller';
import { BookshelvesBookService } from './bookshelves-book.service';
import { BookModule } from 'src/books/books.module';
import { BookshelvesModule } from 'src/bookshelveses/bookshelves.module';

@Module({
  imports: [BookModule, BookshelvesModule],
  controllers: [BookshelvesBookController],
  providers: [BookshelvesBookService],
})
export class BookshelvesBookModule {}
