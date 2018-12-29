import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/take-test-home-page/admin-panel/tests/test.model';

@Component({
  selector: 'app-product-test-summary-modal',
  templateUrl: './product-test-summary-modal.component.html',
  styleUrls: ['./product-test-summary-modal.component.css']
})
export class ProductTestSummaryModalComponent implements OnInit {

  @Input() test: Test;  
  @Input() number: number;
  
  constructor() { }

  ngOnInit() {
  }

  selectedTest(){
    this.test.isSelected = !this.test.isSelected
  }
}
