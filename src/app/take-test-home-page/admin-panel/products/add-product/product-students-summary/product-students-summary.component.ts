import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductTestsAddComponent } from '../product-tests-add/product-tests-add.component';
import { ProductStudentsAddComponent } from '../product-students-add/product-students-add.component';

@Component({
  selector: 'app-product-students-summary',
  templateUrl: './product-students-summary.component.html',
  styleUrls: ['./product-students-summary.component.css']
})
export class ProductStudentsSummaryComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  associateStudents() {

    const modalRef = this.modalService.open(ProductStudentsAddComponent, { size: 'lg' });
    // modalRef.componentInstance.product = this.product
    // modalRef.componentInstance.modalRef = modalRef
    // modalRef.componentInstance.formGroup = this.formGroup
  }
}
