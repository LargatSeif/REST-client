import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../models/product';

@Injectable()
export class ProductService {

  private baseUrl:String = "http://localhost:8080/products";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});

  private product = new Product();
  constructor(private _http:Http) { }

  /*
  * fetch all products
  */
  getAllProducts(){

    return this._http.get(this.baseUrl+'/findAll' , this.options).map((response:Response)=>response.json())
          .catch(this.errorHandler);
  }

  /*
  * fetch one products by id
  */
  getProductById(id: Number){
    
    return this._http.get(this.baseUrl+'/findone/'+id , this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler( error:Response ){
    return Observable.throw(error || "SERVER ERROR");
  }

  setter(product: Product){
    this.product = product;
  }

  getter(){
    return this.product;
  }
}
