import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './books/books.controller';
import { BookService } from './books/books.service';
import { BookshelvesController } from './bookshelveses/bookshelves.controller';
import { BookshelvesService } from './bookshelveses/bookshelves.service';

@Module({
  imports: [],
  controllers: [AppController, BookController, BookshelvesController],
  providers: [AppService, BookService, BookshelvesService],
})
export class AppModule {}
