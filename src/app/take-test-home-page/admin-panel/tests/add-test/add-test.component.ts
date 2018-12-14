import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../test.service';
import { Examination, Test, TestCategory, SubjectInTestCategory } from '../test.model';
import { AddTestService } from './add-test.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewQuestionPaperComponent } from '../preview-question-paper/preview-question-paper.component';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  
  public formGroup: FormGroup;
  examinations: Examination[] = []
  test: Test = new Test
  testCategory: TestCategory
  
  constructor(private formBuilder: FormBuilder,
              private testService: TestService,
              private addTestService: AddTestService,
              private modalService: NgbModal) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      
      'subjects': this.formBuilder.array([])
    })
  }

  onSelectTestCategory(testCategory: TestCategory) {

    this.testCategory = testCategory
    
    //Set default values from test category, this can be overridden in UI for every test
    this.test.duration = (typeof testCategory.duration == "undefined") ? "" : testCategory.duration
    this.test.maxMarks = (typeof testCategory.maxMarks == "undefined") ? "" : testCategory.maxMarks
    //this.test.instructionSet = (typeof testCategory.insructionSet == "undefined") ? "" : testCategory.insructionSet
    this.test.negativeMarkingPercentage = (typeof testCategory.negativeMarkingPercentage == "undefined") ? "" : testCategory.negativeMarkingPercentage
    this.test.subjects = (typeof testCategory.subjects == "undefined") ? new Array<SubjectInTestCategory>() : testCategory.subjects

    this.formGroup.get('duration').setValue(this.test.duration)
    this.formGroup.get('totalMarks').setValue(this.test.maxMarks)
    this.formGroup.get('negativeMarking').setValue(this.test.negativeMarkingPercentage)
    this.formGroup.get('difficultyLevel').setValue(this.test.difficultyLevel)
    this.formGroup.get('instructionSet').setValue(this.test.instructionSet)
  }

  setValuesToTestModel() {
    this.test.name = this.formGroup.get('testName').value
    this.test.duration = this.formGroup.get('duration').value
    this.test.maxMarks = this.formGroup.get('totalMarks').value
    this.test.negativeMarkingPercentage = this.formGroup.get('negativeMarking').value
    this.test.difficultyLevel = this.formGroup.get('difficultyLevel').value
    this.test.instructionSet = this.formGroup.get('instructionSet').value
  }

  onCreateTest() {

    this.setValuesToTestModel()
    this.addTestService.addTest(this.formGroup.value, this.test)
  }

  openQuestionPaperInModal() {

    this.setValuesToTestModel()
  
    const modalRef = this.modalService.open(PreviewQuestionPaperComponent, { size: 'lg' });
    modalRef.componentInstance.test = this.test
    modalRef.componentInstance.modalRef = modalRef
  }
}
