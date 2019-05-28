import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BooksService {
    private books: string[] = ['Władca pierścieni', 'Hobbit', 'Gra o tron', 'Uczeń skrytobójcy',
     'Symfonia C++', 'Thinking in Java', 'You dont know JS'];
    private booksOrders: string[] = [];
    booksChanged = new Subject<string[]>();

    constructor() { }

    getBooks(): string[] {
        return this.books.slice();
    }

    getBooksOrders(): string[] {
        return this.booksOrders.slice();
    }

    private deleteBook(book: string, booksList: string[]) {
        booksList.splice(booksList.indexOf(book), 1);
    }

    private addBook(book: string, booksList: string[]) {
        booksList.push(book);
    }

    manageBooks(book: string, onBooksOrders: boolean) {
        if (onBooksOrders) {
            this.deleteBook(book, this.booksOrders);
            this.addBook(book, this.books);
            this.booksChanged.next(this.getBooksOrders());
        } else {
            this.deleteBook(book, this.books);
            this.addBook(book, this.booksOrders);
            this.booksChanged.next(this.getBooks());
        }
    }

    moveOrdersToBooks() {
        this.books.push(...this.booksOrders.splice(0));
    }
}
