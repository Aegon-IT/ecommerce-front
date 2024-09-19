export class ItemCart {

  constructor(public productId: number,
              public productName: string,
              public quantity: number,
              public price:number) {}

  getTotalPriceItems(){
    return this.price * this.quantity;
  }
}
