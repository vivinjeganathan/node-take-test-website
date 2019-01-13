import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-details-summary',
  templateUrl: './product-details-summary.component.html',
  styleUrls: ['./product-details-summary.component.css']
})
export class ProductDetailsSummaryComponent implements OnInit {

  @Input() product: Product;  
  @Input() number: number;
  @Output() productDeleted = new EventEmitter<Product>();

  
  constructor() { }

  ngOnInit() {
  }

  OnDeleteProduct() {

    this.productDeleted.emit(this.product);
  }
}
