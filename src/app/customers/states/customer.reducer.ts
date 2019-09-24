import { EntityState,EntityAdapter ,createEntityAdapter} from '@ngrx/entity';
import { Customer } from '../model/customer-model';

import { CustomerActions,CustomerActionTypes } from './customer.action';





export interface CustomersState extends EntityState<Customer>{
    selectedId: string |null;
    loading: boolean;
    loaded: boolean;
    error: string;
}



export const customersAdapter: EntityAdapter<Customer> =  createEntityAdapter<Customer>();

export const defaultCustomer: CustomersState = {
    ids: [],
    entities: {},
    selectedId: null,
    loading: false,
    loaded: false,
    error: ''
}


export const initialState = customersAdapter.getInitialState(defaultCustomer);


export function CustomersReducer(state= initialState, action:CustomerActions ): CustomersState{
    switch(action.type){
case CustomerActionTypes.Load_Customers:
{return {
    ...state, loading: true, loaded:false
};}

case CustomerActionTypes.Load_Customers_Success:
{return customersAdapter.addAll(action.payload, {...state, loaded: true});}

case CustomerActionTypes.Load_Customers_Fail:
{return {
    ...state, loading: false, loaded:false, error: action.payload, entities: {}
};}

case CustomerActionTypes.Load_Customer:
{return {
    ...state, loading: true, loaded:false
};}

case CustomerActionTypes.Load_Customer_Success:
{return customersAdapter.addOne(action.payload, {...state, selectedId: action.payload.id});}

case CustomerActionTypes.Load_Customer_Fail:
{return {
    ...state, loading: false, loaded:false, error: action.payload, entities: {}
};}


case CustomerActionTypes.Add_Customer:
{return {
    ...state, loading: true, loaded:false
};}

case CustomerActionTypes.Add_Customer_Success:
{return customersAdapter.addOne(action.payload, {...state, loaded: true});}

case CustomerActionTypes.Add_Customer_Fail:
{return {
    ...state, loading: false, loaded:false, error: action.payload, entities: {}
};}


case CustomerActionTypes.Update_Customer:
{return {
    ...state, loading: true, loaded:false
};}

case CustomerActionTypes.Update_Customer_Success:
{return customersAdapter.updateOne(action.payload, {...state, loaded: true});}

case CustomerActionTypes.Update_Customer_Fail:
{return {
    ...state, loading: false, loaded:false, error: action.payload, entities: {}
};}


case CustomerActionTypes.Delete_Customer:
{return {
    ...state, loading: true, loaded:false
};}

case CustomerActionTypes.Delete_Customer_Success:
{return customersAdapter.removeOne(action.payload, state);}

case CustomerActionTypes.Delete_Customer_Fail:
{return {
    ...state, loading: false, loaded:false, error: action.payload, entities: {}
};}




    }
}


export const getCustomers = customersAdapter.getSelectors().selectAll;
export const getSelectedId =(state:CustomersState)=>state.selectedId;
export const getLoading = (state: CustomersState)=> state.loading;
export const getLoaded = (state: CustomersState)=> state.loaded;
export const getError = (state: CustomersState)=> state.error;