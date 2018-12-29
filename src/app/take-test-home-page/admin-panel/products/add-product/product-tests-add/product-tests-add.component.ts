import { Component, OnInit } from '@angular/core';
import { Test } from '../../../tests/test.model';
import { SearchTestService } from '../../../tests/search-test/search-test.service';

@Component({
  selector: 'app-product-tests-add',
  templateUrl: './product-tests-add.component.html',
  styleUrls: ['./product-tests-add.component.css']
})
export class ProductTestsAddComponent implements OnInit {

  tests: Test[]
  
  constructor(private searchTestService: SearchTestService,) { }

  ngOnInit() {

    this.tests = this.searchTestService.getTests({})

    this.searchTestService.testsChanged.subscribe((tests: Test[]) => {
      this.tests = this.searchTestService.tests
    });
  }

}
