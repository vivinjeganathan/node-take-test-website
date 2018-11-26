import { Component, OnInit, Input } from '@angular/core';
import { Test, TestCategory } from '../../test.model';

@Component({
  selector: 'app-test-group',
  templateUrl: './test-group.component.html',
  styleUrls: ['./test-group.component.css']
})
export class TestGroupComponent implements OnInit {

  @Input() testCategory: TestCategory;  
  tests: [Test] 

  constructor() { }

  ngOnInit() {
    this.tests = this.testCategory.tests
  }

}
