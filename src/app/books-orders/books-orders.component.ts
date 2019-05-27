import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books-orders',
    templateUrl: './books-orders.component.html',
    styleUrls: ['./books-orders.component.scss']
})
export class BooksOrdersComponent implements OnInit {
    books: string[] = ['Władca pierścieni', 'Hobbit', 'Gra o tron'];
    // booksCount = 2;
    // noBooks = true;
    defaultHeading = 'Books orders:';
    secondHeading = 'Some awesome functionality will be here...';
    heading = this.defaultHeading;
    randomTwoWayBinding: string;

    constructor() { }

    ngOnInit() {
    }

    changeHeading() {
        this.heading = this.heading === this.defaultHeading ? this.secondHeading : this.defaultHeading;
    }

    deleteBooks() {
        this.books.splice(0);
    }

    isHeadingSecond(): boolean {
        return this.heading === this.secondHeading ? true : false;
    }

    onBookDelete(book) {
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);
    }
}
