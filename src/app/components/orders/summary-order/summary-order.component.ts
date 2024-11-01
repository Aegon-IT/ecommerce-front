import {Component, OnInit} from '@angular/core';
import {ItemCart} from "../../../common/item-cart";
import {CartService} from "../../../services/cart.service";
import {UserService} from "../../../services/user.service";
import {OrderProduct} from "../../../common/order-product";
import {Order} from "../../../common/order";
import {OrderState} from "../../../common/order-state";
import {OrderService} from "../../../services/order.service";
import {PaymentService} from "../../../services/payment.service";
import {DataPayment} from "../../../common/data-payment";


@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrl: './summary-order.component.css'
})
export class SummaryOrderComponent implements OnInit {

   items: ItemCart [] = [];
   totalCart: number =0;
   firstName: string = '';
   lastName: string = '';
   email: string = '';
   address: string = '';
   orderProducts: OrderProduct[] = [];
   userId: number = 1;

  constructor(private cartService:CartService,
              private userService:UserService,
              private orderService:OrderService,
              private paymentService:PaymentService) {

  }

  ngOnInit(): void {
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.getUserById(this.userId)
  }

  generateOrder() {
    this.items.forEach(
      item => {
        let orderProduct = new OrderProduct(null, item.productId, item.quantity, item.price );
        this.orderProducts.push(orderProduct);
      });

    for (let value of this.orderProducts) {
      console.log("Elementos del array");
      console.log(value.productId);
    }

    let newOrder = new Order(null, new Date(), this.orderProducts, this.userId, OrderState.CANCELLED);
    console.log("Imprimiendo orden");
    console.log(newOrder);
    console.log("orden impresa");
    this.orderService.createOrder(newOrder).subscribe(
      data =>{
        console.log("Order created" + data.id);
      }
    );

    let urlPayment;
    let dataPayment = new DataPayment('PAYPAL', this.totalCart.toString(), 'USD', 'COMPRA');


    this.paymentService.getUrlPaypalPayment(dataPayment).subscribe(
      data => {
        urlPayment = data.url
        console.log('Respuesta exitosa: ', urlPayment);
        window.location.href = urlPayment;
      }
    );
  }


  deleteItemCart(productId: number) {
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      data=> {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.address = data.address;
      }
    );
  }

}
