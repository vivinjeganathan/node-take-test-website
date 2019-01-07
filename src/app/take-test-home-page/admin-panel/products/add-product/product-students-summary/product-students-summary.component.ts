import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../product.model';
import { ProductStudentsAddComponent } from './product-students-add/product-students-add.component';

@Component({
  selector: 'app-product-students-summary',
  templateUrl: './product-students-summary.component.html',
  styleUrls: ['./product-students-summary.component.css']
})
export class ProductStudentsSummaryComponent implements OnInit {

  @Input() product: Product

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  associateStudents() {

    const modalRef = this.modalService.open(ProductStudentsAddComponent, { size: 'lg' });
    modalRef.componentInstance.product = this.product
    modalRef.componentInstance.modalRef = modalRef
    // modalRef.componentInstance.formGroup = this.formGroup
  }
}
