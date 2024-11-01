export class OrderProduct {

  constructor(public id:number|null ,
              public productId: number,
              public quantity: number,
              public price: number) {}

  toString(): string {
    return `Product ID: ${this.productId}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}
