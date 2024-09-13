import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://localhost:8085/api/v1/admin/products";

  constructor( private httpClient: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // Aquí puedes hacer logging del error o mostrar un mensaje al usuario
    console.error(errorMessage);
    return throwError(() => new Error('Ocurrió un error; por favor intenta nuevamente más tarde.'));
  }


  createProduct(formData:any):Observable<any> {

    return this.httpClient.post<Product>(this.apiUrl, formData);
  }

  deleteProductById(id:number):Observable<any> {
    return this.httpClient.delete(this.apiUrl + "/" +id);
  }

  getProductById(id:number):Observable<Product> {
    return this.httpClient.get<Product>(this.apiUrl + "/" +id);
  }

}
