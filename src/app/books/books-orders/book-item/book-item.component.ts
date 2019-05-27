import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
    @Input() book: string;
    @Output() bookDeleted = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onBookDelete() {
        this.bookDeleted.emit(this.book);
    }
}
