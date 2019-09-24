import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAllCustomers } from '../state/customer-app-state';
import * as fromState from '../state/customer-app-state';
import { LoadCustomers, DeleteCustomer, LoadCustomer } from '../states/customer.action';
import * as fromAction from '../states/customer.action';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer-model';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
customers$: Observable<Customer[]>;
  constructor(public store: Store<fromState.AppState>) { }

  ngOnInit() {


   this.customers$= this.store.select(fromState.getAllCustomers);
    this.store.dispatch(new fromAction.LoadCustomers);
   

}

deleteCustomer(id:string){
  return this.store.dispatch(new DeleteCustomer(id));
}

editCustomerr(id: string){
  return this.store.dispatch(new fromAction.LoadCustomer(id));
}


}