import {
  Module,
  NestModule,
  // RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';
import { BookshelvesModule } from './bookshelveses/bookshelves.module';
import { ExceptionModule } from './exceptions/exception.module';
import { BookshelvesBookModule } from './bookshelves-books/bookshelves-book.module';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { MessageEntity } from './messages/messages.entity';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [configuration],
    //   envFilePath: '.development.env',
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rama2000',
      database: 'whatsapp_clone',
      entities: [UserEntity, MessageEntity],
      synchronize: false,
    }),
    BookModule,
    BookshelvesModule,
    ExceptionModule,
    BookshelvesBookModule,
    UserModule,
    AuthModule,
    MessagesModule,
    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('books');
  }
}
