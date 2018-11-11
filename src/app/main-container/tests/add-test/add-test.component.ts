import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../test.service';
import { Examination, Test, TestCategory } from '../test.model';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  
  public addTestFormGroup: FormGroup;
  test: Test = new Test
  examinations: Examination[] = []
  
  constructor(private formBuilder: FormBuilder, private testService: TestService) { }

  ngOnInit() {

    this.examinations = this.testService.getAllExaminations()
    this.testService.examinationsChanged.subscribe((examinations: Examination) => {
      this.examinations = this.testService.examinations
    });

    this.addTestFormGroup = this.formBuilder.group({
      
    })
  }

  onSelectTestCategory(testCategory: TestCategory) {

    this.test.duration = (typeof testCategory.duration == "undefined") ? "" : testCategory.duration
    this.test.maxMarks = (typeof testCategory.maxMarks == "undefined") ? "" : testCategory.maxMarks
    this.test.instructionSet = (typeof testCategory.insructionSet == "undefined") ? "" : testCategory.insructionSet
    this.test.negativeMarkingPercentage = (typeof testCategory.negativeMarkingPercentage == "undefined") ? "" : testCategory.negativeMarkingPercentage
  }

  onCreateTest() {
    
    console.log("Vivin")
    console.log(this.addTestFormGroup)
  }
}
