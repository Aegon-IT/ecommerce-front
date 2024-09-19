import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {ItemCart} from "../../../common/item-cart";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  id: number =0 ;
  name: string= '' ;
  description: string= '' ;
  price: number =0;
  urlImage:string ='';
  quantity:number =0;


  ngOnInit(): void {
    this.getProductById()
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private toastrService: ToastrService) {
  }

  getProductById() {
    this.activatedRoute.params.subscribe(
        p => {
          let id = p['id'];
          if(id){
            this.productService.getProductById(id).subscribe(
              data => {
                this.id = data.id;
                this.name = data.name;
                this.description = data.description;
                this.urlImage = data.urlImage;
                this.price = data.price;
              });
          }
        });
      }

  addCart(id:number){
    console.log(" el id product es:  ", id);
    console.log(" el name product es:  ", this.name);
    console.log(" el quantity del product es:  ", this.quantity);
    console.log(" el precio del product es:  ", this.price);

    let item = new ItemCart(id, this.name, this.quantity, this.price);

    this.cartService.addItemCart(item);

    console.log(" el total del carrito  es:  ", this.cartService.totalCart());

    this.toastrService.success("Producto agregado correctamente.", 'Carrito de compras' );
  }

}
