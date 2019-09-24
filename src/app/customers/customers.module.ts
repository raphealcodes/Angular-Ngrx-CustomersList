import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerss } from './state/customer-app-state';
import { effect } from './effects/index';
import { CustomSerializer } from './states/customer.router';
import { StoreRouterConnectingModule, RouterStateSerializer} from '@ngrx/router-store';





const customersRoutes: Routes = [{path:'', component:CustomersComponent},
];

@NgModule({
  declarations: [CustomersListComponent, CustomersComponent, CustomerAddComponent, CustomerEditComponent],
  imports: [
    CommonModule, RouterModule.forChild(customersRoutes),
    ReactiveFormsModule,StoreModule.forFeature('customers', reducerss), EffectsModule.forFeature(effect),
    StoreRouterConnectingModule,
  

  ],
  providers:[{provide: RouterStateSerializer, useClass: CustomSerializer}],
  exports: [RouterModule]
})
export class CustomersModule { }
