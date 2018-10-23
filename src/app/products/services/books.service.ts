import { Injectable, OnInit } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books:Array<BookModel> = [
    {id: 1, name: 'Apache Camel', price: 153, img:'assets/images/books/camel-250x217.jpg'},
    {id: 2, name: 'Pro CSS and HTML', price: 153, img:'assets/images/books/html_css-250x217.jpg'},
    {id: 3, name: 'Java for dummies', price: 150, img:'assets/images/books/java_for_dummies-250x217.jpg'},
    
    {id: 4, name: 'Angular2', price: 100, img:'assets/images/books/angular2-250x217.jpg' },
    
    {id: 5, name: 'Hacking for dummies', price: 250, img:'assets/images/books/hacking_for_dummies-250x217.jpg'},
    {id: 6, name: 'Copy and Pasting', price: 250, img:'assets/images/books/copypast-250x217.jpg'},
    {id: 7, name: 'Coding on the Weekend', price: 250, img:'assets/images/books/codingonweekend-250x217.jpg'},
    {id: 8, name: 'Deleting Code', price: 250, img:'assets/images/books/deletecode-250x217.jpg'}
    
    
  ];

  constructor() { }



  getBooksAsync(): Promise<Array<BookModel>>{
      // return new Promise<Array<BookModel>>((resolve, reject) => {
      //   setTimeout(() => resolve(this.books), 1000);
      // });

      return new Promise<Array<BookModel>>(resolve => resolve(this.books));
    }
 


}


