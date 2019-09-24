import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { AddCustomer } from '../states/customer.action';
import { Store } from '@ngrx/store';
import { AppState } from '../state/customer-app-state';
import * as fromState from '../state/customer-app-state';
import { Customer } from '../model/customer-model';



@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
formaddcustomer: FormGroup;
  constructor(public fb: FormBuilder, public store: Store<fromState.AppState>) { }

  ngOnInit() {
    this.formaddcustomer = this.fb.group({
     id:[''],
      name:[''],
      phone:[''],
      address:[''],
      membership:['']
    });

  }

  addCustomer(){
    console.log(this.formaddcustomer.value);
    const customerD: Customer={
      id: uuid(),
      name: this.formaddcustomer.get('name').value,
      phone: this.formaddcustomer.get('phone').value,
      address: this.formaddcustomer.get('address').value,
      membership: this.formaddcustomer.get('membership').value
    };

    this.store.dispatch(new AddCustomer(customerD));
    this.formaddcustomer.reset();
  }

}
