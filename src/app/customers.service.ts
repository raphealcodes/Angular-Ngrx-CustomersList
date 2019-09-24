import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customers/model/customer-model';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
url: string='http://localhost:3000/customers';
  constructor(public http: HttpClient) { }

  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

   getId(id: string):Observable<Customer>{
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  addCustomer(data: Customer):Observable<Customer>{
    return this.http.post<Customer>(this.url, data);
  }

  updateCustomer(data: Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.url}/${data.id}`, data);
  }

  voteU(data: Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.url}/${data.id}`, data);
  }



  deleteCustomer(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
