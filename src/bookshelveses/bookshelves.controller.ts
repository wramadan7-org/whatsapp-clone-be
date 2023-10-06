import {
  HttpCode,
  HttpStatus,
  Controller,
  Param,
  Body,
  Res,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';

import {
  ResponseSuccessBookshelvesDto,
  ResponseErrorBookshelvesDto,
  BookshelvesDto,
  UpdateBookshelvesDto,
} from './dto/bookshelves.dto';
import { Response } from 'express';
import { BookshelvesService } from './bookshelves.service';
import { Bookshelves } from './interfaces/bookshelves.interface';

@Controller('/bookshelves')
export class BookshelvesController {
  constructor(private readonly bookshelvesService: BookshelvesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() bookshelvesRequest: BookshelvesDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto | ResponseErrorBookshelvesDto> {
    try {
      const bookshelves: BookshelvesDto =
        this.bookshelvesService.create(bookshelvesRequest);

      if (!bookshelves) {
        const errorResponse: ResponseErrorBookshelvesDto = {
          statusCode: HttpStatus.CONFLICT,
          message: HttpStatus[HttpStatus.CONFLICT],
        };

        res.status(HttpStatus.CONFLICT).json(errorResponse);
        return;
      }

      const response: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.CREATED,
        message: 'Success create bookshelves',
        data: bookshelves,
      };

      res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto | ResponseErrorBookshelvesDto> {
    try {
      const bookshelveses: Bookshelves[] = this.bookshelvesService.findAll();

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: 'Success get bookshelves',
        data: bookshelveses.map((item) => {
          return {
            ...item,
            books: item.books || [],
          };
        }),
      };

      res.status(HttpStatus.OK).json(successResponse);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto | ResponseErrorBookshelvesDto> {
    try {
      const bookshelves: BookshelvesDto = this.bookshelvesService.findById(id);

      if (!bookshelves) {
        const errorResponse: ResponseErrorBookshelvesDto = {
          statusCode: HttpStatus.NOT_FOUND,
          message: `Bookshelves with ID ${id} not found`,
        };

        res.status(HttpStatus.NOT_FOUND).json(errorResponse);
        return;
      }

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success get bookshelves with ID ${id}`,
        data: { ...bookshelves, books: bookshelves.books || [] },
      };

      res.status(HttpStatus.OK).json(successResponse);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id') id: number,
    @Body() bookshelvesRequest: UpdateBookshelvesDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto | ResponseErrorBookshelvesDto> {
    try {
      const bookshelves = this.bookshelvesService.findById(id);

      if (!bookshelves) {
        const errorResponse: ResponseErrorBookshelvesDto = {
          statusCode: HttpStatus.NOT_FOUND,
          message: `Bookshelves with ID ${id} not found`,
        };

        res.status(HttpStatus.NOT_FOUND).json(errorResponse);
        return;
      }

      const update: BookshelvesDto | undefined =
        this.bookshelvesService.updateById(bookshelves, bookshelvesRequest);

      if (!update) {
        const errorResponse: ResponseErrorBookshelvesDto = {
          statusCode: HttpStatus.CONFLICT,
          message: HttpStatus[HttpStatus.CONFLICT],
        };

        res.status(HttpStatus.CONFLICT).json(errorResponse);
        return;
      }

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success update bookshelves with ID ${id}`,
        data: { ...update, books: update.books || [] },
      };

      res.status(HttpStatus.OK).json(successResponse);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto | ResponseErrorBookshelvesDto> {
    try {
      const bookshelves: BookshelvesDto =
        this.bookshelvesService.deleteById(id);

      if (!bookshelves) {
        const errorResponse: ResponseErrorBookshelvesDto = {
          statusCode: HttpStatus.CONFLICT,
          message: HttpStatus[HttpStatus.CONFLICT],
        };

        res.status(HttpStatus.CONFLICT).json(errorResponse);
        return;
      }

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success delete bookshelves with ID ${id}`,
        data: bookshelves,
      };

      res.status(HttpStatus.OK).json(successResponse);
    } catch (error) {
      throw new Error(error);
    }
  }
}
