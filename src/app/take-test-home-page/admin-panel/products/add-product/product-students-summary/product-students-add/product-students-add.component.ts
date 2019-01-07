import { Component, OnInit, Input } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentBatch } from 'src/app/take-test-home-page/admin-panel/students/student.model';
import { Product } from '../../../product.model';
import { StudentBatchService } from 'src/app/take-test-home-page/admin-panel/students/studentBatch.service';

@Component({
  selector: 'app-product-students-add',
  templateUrl: './product-students-add.component.html',
  styleUrls: ['./product-students-add.component.css']
})
export class ProductStudentsAddComponent implements OnInit {

  @Input() modalRef: NgbModalRef;
  studentBatches: StudentBatch[]
  product: Product
  
  constructor(private modalService: NgbModal,
              private studentBatchService: StudentBatchService) { }

  ngOnInit() {
    this.studentBatches = this.studentBatchService.getStudentBatchs(null)

    this.studentBatchService.studentBatchesChanged.subscribe((studentBatches: StudentBatch[]) => {
      this.studentBatches = studentBatches
    })
  }

  onClose() {
    this.modalRef.close('close click')
  }
  
  onSaveStudentGroups() {
    var selectedStudentBatches = (this.studentBatches).filter((studentBatch) => 
      (studentBatch.isSelected == true))
    this.product.associatedStudentBatches = selectedStudentBatches

    this.modalRef.close('Save click')
    console.log(this.product)
  }
}
