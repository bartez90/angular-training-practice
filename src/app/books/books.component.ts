import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from './books.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
    books: string[] = [];
    sub: Subscription;

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        this.books = this.booksService.getBooks();

        this.sub = this.booksService.booksChanged.subscribe(
            books => this.books = books
        );
    }

    onBookOrder(book: string) {
        this.booksService.manageBooks(book, false);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
