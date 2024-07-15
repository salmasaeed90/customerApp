import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
 urlCustomers='https://salmasaeed90.github.io/customer-json-server/db.json';
  urlTransactions='https://salmasaeed90.github.io/transactions-server/db-transactions.json'
  constructor(private _HttpClient:HttpClient) { }

  getAllCustomers():Observable<any>{
    return this._HttpClient.get(this.urlCustomers)
  }

  getAllCustomersTransactions():Observable<any>{
    return this._HttpClient.get( this.urlTransactions)
  }
}
// `http://localhost:3000/customers`
//`http://localhost:3000/transactions`