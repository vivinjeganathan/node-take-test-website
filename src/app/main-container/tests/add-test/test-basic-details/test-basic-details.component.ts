import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Examination, TestCategory, Test } from '../../test.model';
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

    let examSelectFormControl = new FormControl('')
    let testCategorySelectFormControl = new FormControl('')

    this.formGroup.addControl('examSelectFormControl', examSelectFormControl)
    this.formGroup.addControl('testName', new FormControl(''))
    this.formGroup.addControl('selectTestCategory', testCategorySelectFormControl)

    //Set default values
    examSelectFormControl.setValue(this.examinations[0].name)

    this.testCategories = this.testService.getTestCategories(this.examinations[0].name)
    testCategorySelectFormControl.setValue(this.testCategories[0].name)

    examSelectFormControl.valueChanges.subscribe((value) => {
      this.testCategories = this.testService.getTestCategories(value)
      testCategorySelectFormControl.setValue(this.testCategories[0].name)
    });

    testCategorySelectFormControl.valueChanges.subscribe((value) => {
      
      let testCategory = (this.testCategories).filter((testCategory) => (testCategory.name == value) )[0]
      this.testCategoryChanged.emit(testCategory);
    })
  }

}
