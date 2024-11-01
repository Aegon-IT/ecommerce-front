import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataPayment} from "../common/data-payment";
import {Observable} from "rxjs";
import {UrlPaypalResponse} from "../common/url-paypal-response";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8085/api/v1/payments';

  constructor(private httpClient: HttpClient) { }

  getUrlPaypalPayment(dataPayment:DataPayment): Observable<UrlPaypalResponse> {
    return this.httpClient.post<UrlPaypalResponse>(this.apiUrl, dataPayment)
  }
}
