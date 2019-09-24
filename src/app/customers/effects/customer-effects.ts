import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CustomersService } from '../../customers.service';
import { LoadCustomers, LoadCustomersSuccess, LoadCustomersFail, CustomerActionTypes,
 AddCustomer, LoadCustomer, LoadCustomerSuccess, LoadCustomerFail,
 AddCustomerSuccess,UpdateCustomerSuccess, UpdateCustomerFail, AddCustomerFail,UpdateCustomer
  } from '../states/customer.action';

import * as CustomerAction from '../states/customer.action';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { DeleteCustomerFail, DeleteCustomerSuccess, DeleteCustomer } from '../states/customer.action';

@Injectable()
export class CustomerEffect {
    constructor(public service: CustomersService, public actions$: Actions){}


@Effect()
loadcustomers$ = this.actions$.pipe(
    ofType<LoadCustomers>(CustomerAction.CustomerActionTypes.Load_Customers),
    mergeMap(()=> {return this.service.getCustomer().pipe(
        map((data)=> new LoadCustomersSuccess(data)),
        catchError((error)=> of(new LoadCustomersFail(error)))
    );})
);

@Effect()
loadcustomer$ = this.actions$.pipe(
    ofType<LoadCustomer>(CustomerAction.CustomerActionTypes.Load_Customer),
    mergeMap((data)=> {return this.service.getId(data.payload).pipe(
        map((data)=> new LoadCustomerSuccess(data)),
        catchError((error)=> of(new LoadCustomerFail(error)))
    );})
);


@Effect()
addcustomer$ = this.actions$.pipe(
    ofType<AddCustomer>(CustomerAction.CustomerActionTypes.Add_Customer),
    mergeMap((data)=> {return this.service.addCustomer(data.payload).pipe(
        map(()=> new AddCustomerSuccess(data.payload)),
        catchError((error)=> of(new AddCustomerFail(error)))
    );})
);

@Effect()
updatecustomer$ = this.actions$.pipe(
    ofType<UpdateCustomer>(CustomerAction.CustomerActionTypes.Update_Customer),
    mergeMap((data)=> {return this.service.updateCustomer(data.payload).pipe(
        map(()=> new UpdateCustomerSuccess({id:data.payload.id,
        changes: data.payload})),
        catchError((error)=> of(new UpdateCustomerFail(error)))
    );})
);



@Effect()
deletecustomer$ = this.actions$.pipe(
    ofType<DeleteCustomer>(CustomerAction.CustomerActionTypes.Delete_Customer),
    mergeMap((data)=> {return this.service.deleteCustomer(data.payload).pipe(
        map(()=> new DeleteCustomerSuccess(data.payload)),
        catchError((error)=> of(new DeleteCustomerFail(error)))
    );})
);

}