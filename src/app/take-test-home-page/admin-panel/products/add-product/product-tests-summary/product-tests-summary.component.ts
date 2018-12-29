import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductTestsAddComponent } from '../product-tests-add/product-tests-add.component';
import { Test } from '../../../tests/test.model';

@Component({
  selector: 'app-product-tests-summary',
  templateUrl: './product-tests-summary.component.html',
  styleUrls: ['./product-tests-summary.component.css']
})
export class ProductTestsSummaryComponent implements OnInit {

  test: Test

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  associateTests() {

    const modalRef = this.modalService.open(ProductTestsAddComponent, { size: 'lg' });
    // modalRef.componentInstance.product = this.product
    // modalRef.componentInstance.modalRef = modalRef
    // modalRef.componentInstance.formGroup = this.formGroup
  }
}
