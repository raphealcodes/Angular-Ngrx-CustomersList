import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from './customers.service';
import { EffectsModule } from '@ngrx/effects';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,HttpClientModule, EffectsModule.forRoot([]),
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
