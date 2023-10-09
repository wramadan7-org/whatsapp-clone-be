import { Controller, HttpStatus, Res, Body, Post } from '@nestjs/common';
import { Response } from 'express';
import { BookshelvesBookService } from './bookshelves-book.service';
import {
  CreateBookshelvesBookDto,
  ResponseSuccessBookshelvesBookDto,
} from './dto/bookshelves-book.dto';

@Controller('/bookshelves-book')
export class BookshelvesBookController {
  constructor(
    private readonly bookshelvesBookService: BookshelvesBookService,
  ) {}

  @Post()
  async create(
    @Body() bookshelvesBookDto: CreateBookshelvesBookDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesBookDto> {
    const bookshelvesBook =
      this.bookshelvesBookService.create(bookshelvesBookDto);

    const responseSuccess: ResponseSuccessBookshelvesBookDto = {
      statusCode: HttpStatus.CREATED,
      message: `Success add book with ID $${bookshelvesBookDto.bookId} in bookshelves with ID ${bookshelvesBookDto.bookshelvesId}`,
      data: {
        id: bookshelvesBookDto.id,
        bookshelves: bookshelvesBook,
      },
    };
    res.status(HttpStatus.CREATED).json(responseSuccess);
    return;
  }
}
