import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books-orders',
    templateUrl: './books-orders.component.html',
    styleUrls: ['./books-orders.component.scss']
})
export class BooksOrdersComponent implements OnInit {
    booksCount = 2;
    noBooks = true;
    defaultHeading = 'Books orders:';
    secondHeading = 'Some awesome functionality will be here...';
    heading = this.defaultHeading;

    constructor() { }

    ngOnInit() {
    }

    changeHeading() {
        this.heading = this.heading === this.defaultHeading ? this.secondHeading : this.defaultHeading;
    }
}
