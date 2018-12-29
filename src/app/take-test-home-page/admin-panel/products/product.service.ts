import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Product } from "./product.model";
import {environment} from '../../../../environments/environment';

@Injectable()
export class ProductService {

    products: Product[] = []
    
    productURL = environment.serverUrl + '/product'

    productsChanged = new EventEmitter<Product[]>()

    constructor(private http: HttpClient) { }

    getProducts() {

        this.products.length = 0

        this.http.get(this.productURL).subscribe(
            (response) => {
                this.products = this.products.concat(response as [Product])
                this.productsChanged.emit(this.products)
            },
            (error) => console.log(error)
        )
    
        return this.products
    }
}