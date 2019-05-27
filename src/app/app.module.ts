import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksOrdersComponent } from './books-orders/books-orders.component';
import { BookItemComponent } from './books-orders/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksOrdersComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
