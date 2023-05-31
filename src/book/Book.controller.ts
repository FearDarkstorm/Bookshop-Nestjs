import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from "@nestjs/common";
import { BookService } from "./Book.service";
import { Book } from "./data/book.dto";
import { ParseIntPipe } from "@nestjs/common";
import { BookPipe } from "./book.pipes";
import { BookGuard } from "./book.guard";



@Controller('book')
export class BookController {
   
    constructor(private bookservice : BookService)  {

    }


    @Get('/:id')
    @UseGuards(new BookGuard())
    getbook(@Param('id', ParseIntPipe) id : number) : string{
        console.log(id,typeof id)
        return 'you wanted an  id XD'
    }
    //it will basically give us an id as our id is a string 

    @Get('/findAll')
    
    getAll(): Book[] {
        return this.bookservice.findAllBooks();
    }

    @Post('addbook')
    addBook(@Body(new BookPipe()) book :Book) : string {
        return this.bookservice.addBookService(book)
    };

    @Put('updatebook')
    updateBook(@Body() book :Book) :string {
        return this.bookservice.updateBookService(book)
    }
    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId: string) : string {
        return this.bookservice.deleteBookService(bookId)
    }


}