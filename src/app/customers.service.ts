import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
 
  constructor(private _HttpClient:HttpClient) { }

  getAllCustomers():Observable<any>{
    return this._HttpClient.get( `http://localhost:3000/customers`)
  }

  getAllCustomersTransactions():Observable<any>{
    return this._HttpClient.get( `http://localhost:3000/transactions`)
  }
}
