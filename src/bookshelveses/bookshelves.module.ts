import { Module } from '@nestjs/common';
import { BookshelvesController } from './bookshelves.controller';
import { BookshelvesService } from './bookshelves.service';

@Module({
  // imports: [BookshelvesBookModule],
  controllers: [BookshelvesController],
  providers: [BookshelvesService],
  exports: [BookshelvesService],
})
export class BookshelvesModule {}
