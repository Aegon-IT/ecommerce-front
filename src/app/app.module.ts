import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {provideHttpClient} from "@angular/common/http";
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import {Routes, RouterModule} from "@angular/router";
import { ProductAddComponent } from './components/product-add/product-add.component';
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SummaryOrderComponent } from './components/orders/summary-order/summary-order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'admin/product', component: ProductListComponent },
  {path: 'admin/product/productadd', component: ProductAddComponent },
  {path: 'admin/product/update/:id', component: ProductAddComponent },
  {path: 'admin/category', component: CategoryListComponent },
  {path: 'admin/category/add', component: CategoryAddComponent },
  {path: 'admin/category/update/:id', component: CategoryAddComponent },
  {path: 'cart/detailproduct/:id', component: DetailProductComponent },
  {path: 'cart/summary', component: SummaryOrderComponent },
  {path: 'payment/success', component: PaymentSuccessComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    DetailProductComponent,
    HeaderUserComponent,
    SummaryOrderComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [
    //httpClientModule deprecado
    provideHttpClient()
   // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
