import {
  Module,
  NestModule,
  // RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';
import { BookshelvesModule } from './bookshelveses/bookshelves.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [BookModule, BookshelvesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('books');
  }
}
