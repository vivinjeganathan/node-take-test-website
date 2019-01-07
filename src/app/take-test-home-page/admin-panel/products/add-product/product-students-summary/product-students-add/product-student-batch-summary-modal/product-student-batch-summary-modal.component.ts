import { Component, OnInit, Input } from '@angular/core';
import { StudentBatch } from 'src/app/take-test-home-page/admin-panel/students/student.model';

@Component({
  selector: 'app-product-student-batch-summary-modal',
  templateUrl: './product-student-batch-summary-modal.component.html',
  styleUrls: ['./product-student-batch-summary-modal.component.css']
})
export class ProductStudentBatchSummaryModalComponent implements OnInit {

  @Input() studentBatch: StudentBatch;  
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

  selectedStudentBatch(){
    this.studentBatch.isSelected = !this.studentBatch.isSelected
  }
  
}
