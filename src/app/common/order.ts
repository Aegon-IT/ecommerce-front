import {OrderProduct} from "./order-product";
import {OrderState} from "./order-state";

export class Order {

  constructor(public id: number|null,
              public dateCreate: Date,
              public orderProduct: OrderProduct[],
              public userId: number,
              public orderState:OrderState
) { }

  getTotal(){
    let total = 0;
    for(let orderProduct of this.orderProduct){
      total += orderProduct.quantity * orderProduct.price;
      console.log("El total es: "+ total);
    }
  }

  // Método toString para la representación en formato de cadena
  toString(): string {
    return `Order ID: ${this.id},
            Date: ${this.dateCreate.toISOString()},
            User ID: ${this.userId},
            Order State: ${this.orderState},
            Total: ${this.getTotal()},
            Products: ${this.orderProduct.map(op => op.toString()).join(', ')}`;
  }

}
