import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Examination, ExaminationGroup, TestCategory, Test } from '../test.model';
import { TestService } from '../test.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SearchTestService } from './search-test.service';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {

  formGroup: FormGroup
  tests: Test[]

  constructor(private testService: TestService,
              private searchTestService: SearchTestService,
              public formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      
    })
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.tests = this.searchTestService.getTests(params)
    });

    this.searchTestService.testsChanged.subscribe((tests: Test[]) => {
      this.tests = this.searchTestService.tests
    });
  }

  OnSelectExaminationGroup(examinationGroup: ExaminationGroup) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(examinationGroup._id, 'examinationGroup', queryParams)
    this.setQueryParam('', 'examination', queryParams)
    this.setQueryParam('', 'testCategory', queryParams)

    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  OnSelectExamination(examination: Examination) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(examination._id, 'examination', queryParams)
    this.setQueryParam('', 'testCategory', queryParams)

    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  OnSelectTestCategory(testCategory: TestCategory) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(testCategory._id, 'testCategory', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  setQueryParam(value: string, key: string, queryParams: Params) {

    if(value && value != 'Select') {
      queryParams[key] = value
    } else {
      queryParams[key] = null
    }
  }

  onDeleteTest(test: Test) {
    this.searchTestService.deleteTest(test)
  }
}




