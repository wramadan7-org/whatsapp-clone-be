import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { BookService } from 'src/books/books.service';
import { NotFoundException } from '../common/exception/notFound.exception';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { ForbiddenException } from 'src/common/exception/forbidden.exception';

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

  @Get('/http-exception-filter')
  @UseFilters(new HttpExceptionFilter())
  async exceptionFilter(): Promise<void> {
    throw new ForbiddenException();
  }
}
