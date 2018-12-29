import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-pricing-details',
  templateUrl: './product-pricing-details.component.html',
  styleUrls: ['./product-pricing-details.component.css']
})
export class ProductPricingDetailsComponent implements OnInit {

  public formGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'price': new FormControl()
    })
  }

}
