import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] =[];
  id: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe(
      data => {this.products = data
        console.log(data)
      }
    );
  }

  deleteProductById(id: number) {

    Swal.fire({
      title: "Estas seguro de eliminar este registro",
      text: "Una vez ejecutada esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(id).subscribe(
          ()=> this.listProducts()
        );
        Swal.fire({
          title: "Productos!",
          text: "Producto eliminado correctamente",
          icon: "success"
        });
      }
    });


  }

}
