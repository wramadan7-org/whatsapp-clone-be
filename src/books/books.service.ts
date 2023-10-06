import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/books.interface';
import { UpdateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books.filter((item) => item);
  }

  findById(id: number): Book | undefined {
    const books: Book[] = this.books;

    const filtering: Book[] = books.filter((item) => item.id == id);

    if (filtering.length === 0) {
      return undefined; // Return undefined when no matches are found
    }

    return filtering[0];
  }

  updateById(book: Book, data: UpdateBookDto) {
    const assignBook: Book = Object.assign(book, data);

    return assignBook;
  }

  deleteById(id: number): Book | undefined {
    const books: Book[] = this.books;

    const findIndex: number = books.findIndex((item) => item.id == id);

    if (findIndex === -1) {
      return undefined;
    }

    const book: Book | undefined = books[findIndex];

    delete books[findIndex];

    return book;
  }

  createBook(): string {
    return 'This is post book endpoint';
  }

  getBook(): string {
    return 'This is get book endpoint';
  }

  getBooks(): string {
    return 'This is get all books endpoint';
  }

  updateBook(): string {
    return 'This is update book enpoint';
  }

  deleteBook(): string {
    return 'This is delete book endpoint';
  }
}
