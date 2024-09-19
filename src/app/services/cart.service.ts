import { Injectable } from '@angular/core';
import {ItemCart} from "../common/item-cart";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Map<number, ItemCart> = new Map<number, ItemCart>;
  itemList :ItemCart[] = [];


  constructor() { }

  addItemCart(itemCart: ItemCart) {
    this.items.set(itemCart.productId , itemCart);
  }

  deleteItemCart(productId: number) {
      this.items.delete(productId);
      this.items.forEach(
        (valor, clave)=>{
          console.log('Esta es la clave y su valor: ' + clave , valor);
        });


  }

  totalCart(){

    let totalCart:number = 0;

    this.items.forEach(
      (item, clave)=>{
        totalCart += item.getTotalPriceItems();
        console.log(totalCart);
      }
    );

    return totalCart;

  }

  convertToListFromMap() {
    // Limpiar el arreglo actual
    this.itemList.splice(0, this.itemList.length);

    // Recorrer el Map para agregar los items a itemList
    this.items.forEach((item, clave) => {
      this.itemList.push(item);
    });

    // Retornar el arreglo unidimensional
    return this.itemList;
  }

}
