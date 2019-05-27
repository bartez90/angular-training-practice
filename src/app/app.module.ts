import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksOrdersComponent } from './books-orders/books-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksOrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
