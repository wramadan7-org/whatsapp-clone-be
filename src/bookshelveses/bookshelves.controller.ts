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
import { BadRequestException } from 'src/common/exception/badRequest.exception';
import { NotFoundException } from 'src/common/exception/notFound.exception';
import { ConflictException } from 'src/common/exception/conflict.exception';

@Controller('/bookshelves')
export class BookshelvesController {
  constructor(private readonly bookshelvesService: BookshelvesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() bookshelvesRequest: BookshelvesDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto> {
    try {
      const bookshelves: BookshelvesDto =
        this.bookshelvesService.create(bookshelvesRequest);

      const response: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.CREATED,
        message: 'Success create bookshelves',
        data: bookshelves,
      };

      res.status(HttpStatus.CREATED).json(response);
      return;
    } catch (error) {
      throw new BadRequestException('Request not valid');
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
  ): Promise<ResponseSuccessBookshelvesDto> {
    try {
      const bookshelves: BookshelvesDto = this.bookshelvesService.findById(id);

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success get bookshelves with ID ${id}`,
        data: { ...bookshelves, books: bookshelves.books || [] },
      };

      res.status(HttpStatus.OK).json(successResponse);
      return;
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new NotFoundException(`Bookshelves with ID ${id} not found`);
      throw new ConflictException('Conflict');
    }
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id') id: number,
    @Body() bookshelvesRequest: UpdateBookshelvesDto,
    @Res() res: Response,
  ): Promise<ResponseSuccessBookshelvesDto> {
    try {
      const bookshelves = this.bookshelvesService.findById(id);

      const update: BookshelvesDto | undefined =
        this.bookshelvesService.updateById(bookshelves, bookshelvesRequest);

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success update bookshelves with ID ${id}`,
        data: { ...update, books: update.books || [] },
      };

      res.status(HttpStatus.OK).json(successResponse);
      return;
    } catch (error) {
      throw new BadRequestException();
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

      const successResponse: ResponseSuccessBookshelvesDto = {
        statusCode: HttpStatus.OK,
        message: `Success delete bookshelves with ID ${id}`,
        data: bookshelves,
      };

      res.status(HttpStatus.OK).json(successResponse);
      return;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Bookshelves with ID ${id} not found`);
      }

      throw new ConflictException('Conflict');
    }
  }
}
