import { Module } from '@nestjs/common';
import { BookshelvesController } from './bookshelves.controller';
import { BookshelvesService } from './bookshelves.service';

@Module({
  controllers: [BookshelvesController],
  providers: [BookshelvesService],
})
export class BookshelvesModule {}
