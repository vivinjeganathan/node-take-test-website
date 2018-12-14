import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Examination, TestCategory, Test, ExaminationGroup } from '../../test.model';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-test-basic-details',
  templateUrl: './test-basic-details.component.html',
  styleUrls: ['./test-basic-details.component.css']
})
export class TestBasicDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() examinations: Examination[] = []
  @Input() test: Test

  @Output() testCategoryChanged = new EventEmitter<TestCategory>();

  testCategories: TestCategory[] = []
  
  constructor(private formBuilder: FormBuilder, private testService: TestService) { }

  ngOnInit() {

    this.formGroup.addControl('testName', new FormControl(''))
  }

  OnSelectTestCategory(testCategory: TestCategory) {
    this.test.testCategory = testCategory
    this.testCategoryChanged.emit(testCategory);
  }

  OnSelectExaminationGroup(examinationGroup: ExaminationGroup) {
    this.test.examinationGroup = examinationGroup
  }

  OnSelectExamination(examination: Examination) {
    this.test.examination = examination
  }

  

}
