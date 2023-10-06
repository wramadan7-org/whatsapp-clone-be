import { Injectable } from '@nestjs/common';
import { Bookshelves } from './interfaces/bookshelves.interface';
import { UpdateBookshelvesDto } from './dto/bookshelves.dto';

@Injectable()
export class BookshelvesService {
  private readonly bookshelveses: Bookshelves[] = [];

  create(bookshelves: Bookshelves): Bookshelves {
    const createBookshelves = this.bookshelveses.push(bookshelves);

    if (!createBookshelves) return undefined;

    return bookshelves;
  }

  findAll(): Bookshelves[] {
    return this.bookshelveses.filter((item) => item);
  }

  findById(id: number): Bookshelves | undefined {
    const bookshelveses: Bookshelves[] = this.bookshelveses;

    const filtering: Bookshelves[] = bookshelveses.filter(
      (item) => item.id == id,
    );

    if (filtering.length === 0) return undefined;

    return filtering[0];
  }

  updateById(
    bookshelves: Bookshelves,
    data: UpdateBookshelvesDto,
  ): Bookshelves | undefined {
    const assignBookshelves: Bookshelves = Object.assign(bookshelves, data);

    return assignBookshelves;
  }

  deleteById(id: number): Bookshelves | undefined {
    const bookshelveses: Bookshelves[] = this.bookshelveses;

    const findIndex: number = bookshelveses.findIndex((item) => item.id == id);

    if (findIndex === -1) {
      return undefined;
    }

    const bookshelves: Bookshelves | undefined = bookshelveses[findIndex];
    delete bookshelveses[findIndex];
    return bookshelves;
  }
}
