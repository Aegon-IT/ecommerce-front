import {Component, OnInit} from '@angular/core';
import {ItemCart} from "../../../common/item-cart";
import {CartService} from "../../../services/cart.service";
import {UserService} from "../../../services/user.service";


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

  constructor(private cartService: CartService, private userService: UserService ) {

  }

  ngOnInit(): void {
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.getUserById(1)
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
