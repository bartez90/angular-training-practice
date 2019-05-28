import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksOrdersComponent } from './books/books-orders/books-orders.component';
import { BookItemComponent } from './books/books-orders/book-item/book-item.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';
import { AppRouting } from './app-routing.module';
import { BooksService } from './books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksOrdersComponent,
    BookItemComponent,
    BooksComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
