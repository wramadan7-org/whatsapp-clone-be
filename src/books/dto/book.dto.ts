export class CreateBookDto {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly price: number;
}

export class UpdateBookDto {
  readonly id?: number;
  readonly title?: string;
  readonly author?: string;
  readonly price?: number;
}

export class BookDto {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly price: number;
}

export class ResponseErrorBookDto {
  readonly statusCode: number;
  readonly message: string;
}

export class ResponseSuccessBookDto {
  readonly statusCode: number;
  readonly message: string;
  readonly data: any;
}
