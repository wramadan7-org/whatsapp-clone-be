import { Book } from 'src/books/interfaces/books.interface';

export interface Bookshelves {
  id: number;
  title: string;
  shelfNumber: number;
  books?: Book[];
}
