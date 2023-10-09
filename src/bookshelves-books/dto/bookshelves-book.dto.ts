import { Bookshelves } from 'src/bookshelveses/interfaces/bookshelves.interface';

export class CreateBookshelvesBookDto {
  readonly id: number;
  readonly bookshelvesId: number;
  readonly bookId: number;
}

export class BookShelvesBookDto {
  readonly id: number;
  readonly bookshelves: Bookshelves;
}

export class UpdateBookShelvesBookDto {
  readonly bookshelvesId: number;
  readonly bookId?: number;
}

export class ResponseSuccessBookshelvesBookDto {
  readonly statusCode: number;
  readonly message: string;
  readonly data: any;
}
