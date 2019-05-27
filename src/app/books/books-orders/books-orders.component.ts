import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    ngOnInit() {
    }

    changeHeading() {
        this.heading = this.heading === this.defaultHeading ? this.secondHeading : this.defaultHeading;
    }

    deleteBooks() {
        this.books.splice(0);
        this.router.navigate(['']);
    }

    isHeadingSecond(): boolean {
        return this.heading === this.secondHeading ? true : false;
    }

    onBookDelete(book) {
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);

        if (!this.books.length) {
            this.router.navigate(['']);
        }
    }
}
