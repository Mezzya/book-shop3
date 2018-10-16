import { BookModel } from "src/app/products/models/book.model";

export class CartItemModel extends BookModel {
    constructor(public id:number, public name:string, public price:number,
        public img:string, public quantity:number){
            super(id, name, price, img);
    }
}
