import { Injectable } from '@nestjs/common';
import { Bookshelves } from './interfaces/bookshelves.interface';
import { UpdateBookshelvesDto } from './dto/bookshelves.dto';
import { ConflictException } from 'src/common/exception/conflict.exception';
import { NotFoundException } from 'src/common/exception/notFound.exception';

@Injectable()
export class BookshelvesService {
  private readonly bookshelveses: Bookshelves[] = [];

  create(bookshelves: Bookshelves): Bookshelves {
    const createBookshelves = this.bookshelveses.push(bookshelves);

    if (!createBookshelves) throw new ConflictException('Conflict');

    return bookshelves;
  }

  findAll(): Bookshelves[] {
    return this.bookshelveses.filter((item) => item);
  }

  findById(id: number): Bookshelves {
    const bookshelveses: Bookshelves[] = this.bookshelveses;

    const filtering: Bookshelves[] = bookshelveses.filter(
      (item) => item.id == id,
    );

    if (filtering.length === 0)
      throw new NotFoundException(`Bookshelves with ID ${id} not found`);

    return filtering[0];
  }

  updateById(
    bookshelves: Bookshelves,
    data: UpdateBookshelvesDto,
  ): Bookshelves | undefined {
    const assignBookshelves: Bookshelves = Object.assign(bookshelves, data);

    return assignBookshelves;
  }

  deleteById(id: number): Bookshelves {
    const bookshelveses: Bookshelves[] = this.bookshelveses;

    const findIndex: number = bookshelveses.findIndex((item) => item.id == id);

    if (findIndex === -1)
      throw new NotFoundException(`Bookshelves with ID ${id} not found`);

    const bookshelves: Bookshelves = bookshelveses[findIndex];
    delete bookshelveses[findIndex];
    return bookshelves;
  }
}
