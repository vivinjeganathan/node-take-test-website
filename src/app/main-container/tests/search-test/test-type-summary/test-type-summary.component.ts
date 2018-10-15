import { Component, OnInit, Input } from '@angular/core';
import { TestCategory } from '../../test.model';

@Component({
  selector: 'app-test-type-summary',
  templateUrl: './test-type-summary.component.html',
  styleUrls: ['./test-type-summary.component.css']
})
export class TestTypeSummaryComponent implements OnInit {

  @Input() testCategory: TestCategory;  

  constructor() { }

  ngOnInit() {
  }

}
