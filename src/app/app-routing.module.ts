import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BooksOrdersComponent } from './books/books-orders/books-orders.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    {path: '', component: BooksComponent},
    {path: 'books-orders', component: BooksOrdersComponent},
    {path: 'user', component: UserComponent},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouting {}
