import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ExaminationGroup } from '../../tests/test.model';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  formGroup: FormGroup
  products: Product[]

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({

    })

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.products = this.productService.getProducts(params)
    });

    this.productService.productsChanged.subscribe((products: [Product]) => {
      this.products = this.productService.products
    });
  }

  OnSelectExaminationGroup(examinationGroup: ExaminationGroup) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(examinationGroup._id, 'examinationGroup', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  OnProductNameSearch (text: string) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(text, 'productName', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  setQueryParam(value: string, key: string, queryParams: Params) {

    if(value && value != 'Select') {
      queryParams[key] = value
    } else {
      queryParams[key] = null
    }
  }
  
  OnDeleteProduct(product: Product) {
    this.productService.OnDeleteProduct(product)
  }
}
