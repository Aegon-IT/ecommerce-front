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

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'admin/product', component: ProductListComponent },
  {path: 'admin/product/productadd', component: ProductAddComponent },
  {path: 'admin/product/update/:id', component: ProductAddComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //httpClientModule deprecado
    provideHttpClient()
   // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
