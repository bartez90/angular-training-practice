import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-books-orders',
    templateUrl: './books-orders.component.html',
    styleUrls: ['./books-orders.component.scss']
})
export class BooksOrdersComponent implements OnInit, OnDestroy {
    books: string[] = [];
    // booksCount = 2;
    // noBooks = true;
    defaultHeading = 'Books orders:';
    secondHeading = 'Some awesome functionality will be here...';
    heading = this.defaultHeading;
    randomTwoWayBinding: string;
    sub: Subscription;

    constructor(private router: Router, private booksService: BooksService) { }

    ngOnInit() {
        this.books = this.booksService.getBooksOrders();

        this.sub = this.booksService.booksChanged.subscribe(
            books => this.books = books
        );
    }

    changeHeading() {
        this.heading = this.heading === this.defaultHeading ? this.secondHeading : this.defaultHeading;
    }

    isHeadingSecond(): boolean {
        return this.heading === this.secondHeading ? true : false;
    }

    onBookDelete(book) {
        // const index = this.books.indexOf(book);
        // this.books.splice(index, 1);
        this.booksService.manageBooks(book, true);

        if (!this.books.length) {
            this.router.navigate(['']);
        }
    }

    onBooksDelete() {
        // this.books.splice(0);
        this.booksService.moveOrdersToBooks();
        this.router.navigate(['']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
