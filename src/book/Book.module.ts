import { Module, NestModule } from '@nestjs/common';
import { BookService } from './Book.service';
import { BookController } from './Book.controller';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { bookMiddleware } from './book.middlewaree';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bookMiddleware).forRoutes('book');
  }
}
