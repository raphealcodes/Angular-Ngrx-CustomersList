import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState, getAllSelectedId } from '../state/customer-app-state';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer-model';
import { Store } from '@ngrx/store';
import * as fromState from '../state/customer-app-state';
import { UpdateCustomer } from '../states/customer.action';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

 formeditcustomer: FormGroup;
 
  constructor(public fb: FormBuilder, public store:Store<fromState.AppState>) { }

  ngOnInit() {
    this.formeditcustomer = this.fb.group({
      id:[''],
      name:[''],
      phone:[''],
      address:[''],
      membership:['']
    });

const editCustomer$:Observable<Customer> = this.store.select(fromState.getAllSelectedId);
editCustomer$.subscribe( currentCustomer=>{ if (currentCustomer){
  this.formeditcustomer.patchValue({
    id: currentCustomer.id,
    name: currentCustomer.name,
    phone: currentCustomer.phone,
    address: currentCustomer.address,
    membership: currentCustomer.membership,
  });
}})
  }

  editCustomer(){
    const currentCustomerId:Customer={
      id: this.formeditcustomer.get('id').value,
      name: this.formeditcustomer.get('name').value,
      phone: this.formeditcustomer.get('phone').value,
      address: this.formeditcustomer.get('address').value,
      membership: this.formeditcustomer.get('membership').value,
    };
    this.store.dispatch(new UpdateCustomer(currentCustomerId));
    this.formeditcustomer.reset();
  }

}
