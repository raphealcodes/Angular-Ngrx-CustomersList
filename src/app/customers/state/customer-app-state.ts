import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../states/customer.reducer';

import { RouterStateUrl } from '../states/customer.router';
import { RouterReducerState , routerReducer} from '@ngrx/router-store';





export interface AppState {
    customers: fromReducer.CustomersState;
    route: RouterReducerState<RouterStateUrl>;
}


export const reducerss: ActionReducerMap<AppState> = {
    customers: fromReducer.CustomersReducer,
    route: routerReducer
};


export const getCustomerFeatureState = createFeatureSelector<AppState>('customers');
export const getCustomerState = createSelector(getCustomerFeatureState, (state: AppState) => state.customers);


export const getAllCustomers = createSelector(getCustomerState, fromReducer.getCustomers);
export const getAllLoading = createSelector(getCustomerState, fromReducer.getLoading);
export const getAllLoaded = createSelector(getCustomerState, fromReducer.getLoaded);
export const getAllError = createSelector(getCustomerState, fromReducer.getError);


export const getEntities = createSelector(getCustomerState, fromReducer.getSelectedId);
export const getAllSelectedId = createSelector(getCustomerState, getEntities,
 state => state.entities[state.selectedId]);
