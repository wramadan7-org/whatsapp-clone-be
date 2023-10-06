import {
  HttpCode,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { BookService } from './books.service';
import {
  ResponseSuccessBookDto,
  ResponseErrorBookDto,
  CreateBookDto,
  BookDto,
  UpdateBookDto,
} from './dto/book.dto';
import { Book } from './interfaces/books.interface';
import { Response } from 'express';

@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/interface')
  @HttpCode(201)
  async create(
    @Body() createBookDto: CreateBookDto,
  ): Promise<ResponseSuccessBookDto> {
    try {
      this.bookService.create(createBookDto);

      const response: ResponseSuccessBookDto = {
        statusCode: 201,
        message: 'Success create book',
        data: createBookDto,
      };

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/interface')
  @HttpCode(200)
  async findAll(): Promise<ResponseSuccessBookDto> {
    try {
      const books: Book[] = this.bookService.findAll();

      const response: ResponseSuccessBookDto = {
        statusCode: 200,
        message: 'Success get books',
        data: books,
      };

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/interface/:id')
  async findById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookDto | ResponseErrorBookDto> {
    try {
      const book: BookDto | undefined = this.bookService.findById(id);

      if (!book) {
        // Handle the case where no book is found with the given ID
        const errorResponse: ResponseErrorBookDto = {
          statusCode: 404,
          message: `Book with ID ${id} not found`,
        };

        res.status(HttpStatus.NOT_FOUND).json(errorResponse); // Set status code to 404
        return;
      }

      const response: ResponseSuccessBookDto = {
        statusCode: 200,
        message: `Success get book by ID ${id}`,
        data: book,
      };

      res.status(HttpStatus.OK).json(response); // Set status code to 200
    } catch (error) {
      throw new Error(error);
    }
  }

  @Patch('/interface/:id')
  async updateById(
    @Param('id') id: number,
    @Body() req: UpdateBookDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookDto | ResponseErrorBookDto> {
    try {
      const book: BookDto | undefined = this.bookService.findById(id);

      if (!book) {
        const errorResponse: ResponseErrorBookDto = {
          statusCode: 404,
          message: `Book with ID ${id} not found`,
        };

        res.status(HttpStatus.NOT_FOUND).json(errorResponse);
        return;
      }

      const update = this.bookService.updateById(book, req);

      const response: ResponseSuccessBookDto = {
        statusCode: 200,
        message: `Success update book with ID ${id}`,
        data: update,
      };

      res.status(HttpStatus.OK).json(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('/interface/:id')
  async deleteById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const deleteBook = this.bookService.deleteById(id);

      if (!deleteBook) {
        const errorResponse: ResponseErrorBookDto = {
          statusCode: HttpStatus.CONFLICT,
          message: HttpStatus[HttpStatus.CONFLICT],
        };

        res.status(HttpStatus.CONFLICT).json(errorResponse);
      }

      const response: ResponseSuccessBookDto = {
        statusCode: 200,
        message: `Success delete book with ID ${id}`,
        data: deleteBook,
      };

      res.status(200).json(response);
    } catch (error) {
      throw new Error();
    }
  }
}
