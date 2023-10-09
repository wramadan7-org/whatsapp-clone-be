import { Injectable } from '@nestjs/common';
import { CreateBookshelvesBookDto } from './dto/bookshelves-book.dto';
import { BookshelvesService } from 'src/bookshelveses/bookshelves.service';
import { BookService } from 'src/books/books.service';
import { NotFoundException } from 'src/common/exception/notFound.exception';

@Injectable()
export class BookshelvesBookService {
  constructor(
    private readonly bookshelvesService: BookshelvesService,
    private readonly bookService: BookService,
  ) {}

  create(bookshelvesBook: CreateBookshelvesBookDto) {
    const bookshelves = this.bookshelvesService.findById(
      bookshelvesBook.bookshelvesId,
    );
    if (!bookshelves)
      throw new NotFoundException(
        `Bookshelves with ID ${bookshelvesBook.bookshelvesId} not found`,
      );

    const book = this.bookService.findById(bookshelvesBook.bookId);
    if (!book)
      throw new NotFoundException(
        `Book with ID ${bookshelvesBook.bookId} not found`,
      );

    // Ensure that books property is initialized if it's not defined.
    if (!bookshelves.books) {
      bookshelves.books = [];
    }

    bookshelves.books.push(book);

    return bookshelves;
  }
}
