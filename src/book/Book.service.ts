import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    this.books.push(book);
    return 'book has been succesfully addded';
  }

  //updatebook
  updateBookService(book: Book): string {
    let index = this.books.findIndex((currentbook) => {
      return currentbook.id == book.id;
    });
    this.books[index] = book;
    return 'book has been updated succesfully';
  }

  //delte book//

  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return 'Book has been deleted';
  }
  

  //basically it will return an array where that book doesn't exist

  //finmdallbook

  findAllBooks() : Book[] {
    return this.books;
  }
}
