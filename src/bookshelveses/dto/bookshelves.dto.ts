import { Book } from 'src/books/interfaces/books.interface';

export class CreateBookshelvesDto {
  readonly id: number;
  readonly title: string;
  readonly shelfNumber: number;
  readonly books?: Book[];
}

export class UpdateBookshelvesDto {
  readonly id?: number;
  readonly title?: string;
  readonly shelfNumber?: number;
  readonly books?: Book[];
}

export class BookshelvesDto {
  readonly id: number;
  readonly title: string;
  readonly shelfNumber: number;
  readonly books?: Book[];
}

export class ResponseErrorBookshelvesDto {
  readonly statusCode: number;
  readonly message: string;
}

export class ResponseSuccessBookshelvesDto {
  readonly statusCode: number;
  readonly message: string;
  readonly data: any;
}
