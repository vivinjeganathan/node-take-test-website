import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../test.model';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {

  @Input() test: Test; 
   
  constructor() { }

  ngOnInit() {
  }

}
