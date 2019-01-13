import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Product } from "./product.model";
import {environment} from '../../../../environments/environment';
import { FormGroup } from "@angular/forms";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Params } from "@angular/router";
import * as _ from 'lodash';

@Injectable()
export class ProductService {

    products: Product[] = []
    
    productURL = environment.serverUrl + '/product'

    productsChanged = new EventEmitter<Product[]>()

    constructor(private http: HttpClient) { }

    getProducts(params: Params) {

        let queryParams = new HttpParams();

        if (!_.isUndefined(params) && params != null) {

            let id = params['id'];
            let examinationGroup = params['examinationGroup'];
            let productName = params['productName'];

            queryParams = _.isUndefined(id) ? queryParams : queryParams.append('_id', id);
            queryParams = _.isUndefined(examinationGroup) ? queryParams : queryParams.append('examinationGroup', examinationGroup);
            queryParams = _.isUndefined(productName) ? queryParams : queryParams.append('productName', productName);
        }

        this.products.length = 0

        this.http.get(this.productURL , { params: queryParams } ).subscribe(
            (response) => {
                this.products = this.products.concat(response as [Product])
                this.productsChanged.emit(this.products)
            },
            (error) => console.log(error)
        )
    
        return this.products
    }
    
    getDate(date: NgbDateStruct): Date {
        return date ? new Date(''+date.year+'-'+date.month+'-'+date.day) : null;
    }
    
    toModel(date: NgbDateStruct): Date {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    }

    addProduct(productDetails: FormGroup, product: Product) {
    
        let postJson = {"name" :  productDetails.get('productName').value, 
                        "description": productDetails.get('productDescription').value,  
                        "startTime": this.getDate(productDetails.get('startDate').value),  
                        "endTime": this.getDate(productDetails.get('endDate').value), 
                        "isAcademicProduct": productDetails.get('academicProduct').value }

        if (productDetails.get('academicProduct').value) {
            let studentBatchesArray = product.associatedStudentBatches.map(batch => batch._id)
            postJson['associatedStudentBatches'] = studentBatchesArray
        } else {
            postJson['productCost'] = productDetails.get('price').value
            postJson['isAcademicProduct'] = false
        }

        if(product.tests) {
            let testsArray = product.tests.map(test => test._id)
            postJson['tests'] = testsArray
        }

        this.http.post(this.productURL, postJson).subscribe(
            
            (response) => {
                console.log(response)
            },
            (error) => console.log(error)
        )
    }

    OnDeleteProduct(product: Product) {
        
        var deleteUrl = this.productURL + "/" + product._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.products.splice(this.products.indexOf(product), 1);
            this.productsChanged.emit(this.products)
        }, (error) => console.log(error))
    }
}