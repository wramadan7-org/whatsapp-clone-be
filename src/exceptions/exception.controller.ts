import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { BookService } from 'src/books/books.service';
import { NotFoundException } from './buildin/NotFoundException';

@Controller('/exception')
export class ExceptionController {
  constructor(private readonly bookService: BookService) {}
  @Get('/default')
  async exceptionDefault(): Promise<void> {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('/default/override')
  async exceptionDefaultOverride(): Promise<void> {
    try {
      this.bookService.deleteById(100);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'This is custom exception default',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/buildin')
  async exceptionNotFoundBuildin(): Promise<void> {
    throw new NotFoundException('Exception buildin not found'); // The argument in NotFoundException is optional
  }
}
