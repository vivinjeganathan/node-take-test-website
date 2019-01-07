import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Test } from '../../../tests/test.model';
import { Product } from '../../product.model';
import { ProductTestsAddComponent } from './product-tests-add/product-tests-add.component';

@Component({
  selector: 'app-product-tests-summary',
  templateUrl: './product-tests-summary.component.html',
  styleUrls: ['./product-tests-summary.component.css']
})
export class ProductTestsSummaryComponent implements OnInit {

  @Input() product: Product

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  associateTests() {

    const modalRef = this.modalService.open(ProductTestsAddComponent, { size: 'lg' });
    modalRef.componentInstance.product = this.product
    modalRef.componentInstance.modalRef = modalRef
    // modalRef.componentInstance.formGroup = this.formGroup
  }
}
