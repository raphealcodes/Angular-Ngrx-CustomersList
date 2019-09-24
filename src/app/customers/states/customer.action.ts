import { Action } from '@ngrx/store';
import { Customer } from '../model/customer-model';
import { Update } from '@ngrx/entity';

export enum CustomerActionTypes{
    Load_Customers = '[customer] load customers',
    Load_Customers_Success = '[customer] load customers success',
    Load_Customers_Fail = '[customer] load customers fail',

     Load_Customer = '[customer] load customer',
    Load_Customer_Success = '[customer] load customer success',
    Load_Customer_Fail = '[customer] load customer fail',

      Add_Customer = '[customer] add customer',
    Add_Customer_Success = '[customer] add customer success',
    Add_Customer_Fail = '[customer] add customer fail',

     Update_Customer = '[customer] update customer',
    Update_Customer_Success = '[customer] update customer success',
    Update_Customer_Fail = '[customer] update customer fail',

    Delete_Customer = '[customer] delete customer',
    Delete_Customer_Success = '[customer] delete customer success',
    Delete_Customer_Fail = '[customer] delete customer fail',

    
};


export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.Load_Customers;

}

export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionTypes.Load_Customers_Success;
    
    constructor(public payload: Customer[]){}
}

export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.Load_Customers_Fail;
    
    constructor(public payload: string){}
}


export class LoadCustomer implements Action {
    readonly type = CustomerActionTypes.Load_Customer;
constructor(public payload: string){}
}

export class LoadCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.Load_Customer_Success;
    
    constructor(public payload: Customer){}
}

export class LoadCustomerFail implements Action {
    readonly type = CustomerActionTypes.Load_Customer_Fail;
    
    constructor(public payload: string){}
}


export class AddCustomer implements Action {
    readonly type = CustomerActionTypes.Add_Customer;
constructor(public payload: Customer){}
}

export class AddCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.Add_Customer_Success;
    
    constructor(public payload: Customer){}
}

export class AddCustomerFail implements Action {
    readonly type = CustomerActionTypes.Add_Customer_Fail;
    
    constructor(public payload: string){}
}


export class UpdateCustomer implements Action {
    readonly type = CustomerActionTypes.Update_Customer;
constructor(public payload: Customer){}
}

export class UpdateCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.Update_Customer_Success;
    
    constructor(public payload: Update<Customer>){}
}

export class UpdateCustomerFail implements Action {
    readonly type = CustomerActionTypes.Update_Customer_Fail;
    
    constructor(public payload: string){}
}





export class DeleteCustomer implements Action {
    readonly type = CustomerActionTypes.Delete_Customer;
constructor(public payload: string){}
}

export class DeleteCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.Delete_Customer_Success;
    
    constructor(public payload:string){}
}

export class DeleteCustomerFail implements Action {
    readonly type = CustomerActionTypes.Delete_Customer_Fail;
    
    constructor(public payload: string){}
}


export type CustomerActions = LoadCustomers| LoadCustomersSuccess| LoadCustomersFail |AddCustomer |AddCustomerSuccess
|AddCustomerFail |DeleteCustomer |DeleteCustomerSuccess
|DeleteCustomerFail|LoadCustomer| LoadCustomerSuccess| LoadCustomerFail |UpdateCustomer| UpdateCustomerSuccess| 
UpdateCustomerFail;

