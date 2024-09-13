import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls:  ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  id :number =0
  code: string ='';
  name: string ='';
  description: string ='';
  price: number =0;
  urlImage :string ='';
  userId :number = 1;
  categoryId: string ='1'

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
      this.getProductById();
  }

  addProduct() {
    const formData = new FormData();
    formData.append('id' ,this.id.toString());
    formData.append('code' ,this.code);
    formData.append('name' ,this.name);
    formData.append('description' ,this.description);
    formData.append('price' ,this.price.toString());
    formData.append('urlImage' ,this.urlImage);
    formData.append('userId', this.userId.toString());
    formData.append('categoryId' ,this.categoryId.toString());
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => {console.log(data);
        this.router.navigate(['admin/product']);
      }
    );


  }

  getProductById() {
    this.activatedRoute.params.subscribe(
      prod => {
                let id = prod['id'];
                if(id){
                  console.log('el valor de la variable id: '+id);
                }
      }
    );
  }

}
