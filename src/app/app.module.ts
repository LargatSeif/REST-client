import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { CustomersComponent } from './products/customers/customers.component';
import { HomeComponent } from './home/home/home.component';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';


const appRoutes:Routes=[
  { path:'', component: HomeComponent },
  { path:'products', component: ProductsComponent },
  { path:'customers', component: CustomersComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
