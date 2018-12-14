import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Test, TestCategory, ExaminationGroup, Examination } from '../../test.model';
import { TestService } from '../../test.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-group',
  templateUrl: './test-group.component.html',
  styleUrls: ['./test-group.component.css']
})
export class TestGroupComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Output() examinationGroupValueChanged = new EventEmitter<ExaminationGroup>();
  @Output() examinationValueChanged = new EventEmitter<Examination>();
  @Output() testCategoryValueChanged = new EventEmitter<TestCategory>();

  examinationGroups: ExaminationGroup[] = []
  examinations: Examination[] = []
  testCategories: TestCategory[] = []

  selectedExaminationGroup: ExaminationGroup

  constructor(private testService: TestService,
              public formBuilder: FormBuilder,) { }

  ngOnInit() {
    let selectExaminationGroup = new FormControl('')
    let selectExamination = new FormControl('')
    let selectTestCategory = new FormControl('')

    this.formGroup.addControl('examinationGroup', selectExaminationGroup)
    this.formGroup.addControl('examination', selectExamination)
    this.formGroup.addControl('testCategory', selectTestCategory)
  
    this.examinationGroups = this.testService.getExaminationGroups()

    selectExaminationGroup.valueChanges.subscribe((value) => {

      let examGroup = this.examinationGroups.filter(examinationGroup => (examinationGroup.name == value))[0]
      this.selectedExaminationGroup = examGroup

      this.examinations = this.testService.getExaminations(examGroup._id)
      this.examinationGroupValueChanged.emit(examGroup)
    }); 

    selectExamination.valueChanges.subscribe((value) => {

      let exam = this.examinations.filter(examination => (examination.name == value))[0]
      this.testCategories = this.testService.getTestCategories(this.selectedExaminationGroup._id, exam._id)

      this.examinationValueChanged.emit(exam)

      //Set default values
      selectTestCategory.setValue(this.testCategories[0].name)
    }); 

    selectTestCategory.valueChanges.subscribe((value) => {
      
      let testCategory = this.testCategories.filter(testCategory => (testCategory.name == value))[0]
      this.testCategoryValueChanged.emit(testCategory)
    }); 

    this.testService.examinationGroupsChanged.subscribe((examinationGroups: ExaminationGroup[]) => {
      
      this.examinationGroups = this.testService.examinationGroups

      //Set default values
      this.examinations = this.testService.getExaminations(null)
      this.testCategories = this.testService.getTestCategories(null, null)

      selectExaminationGroup.setValue(this.examinationGroups[0].name)
      selectExamination.setValue(this.examinations[0].name)
      selectTestCategory.setValue(this.testCategories[0].name)
    });

    this.testService.examinationsChanged.subscribe((examinations: [Examination]) => {
      this.examinations = this.testService.examinations

      //Set default values
      this.testCategories = this.testService.getTestCategories(null, null)
      
      selectExamination.setValue(this.examinations[0].name)
      selectTestCategory.setValue(this.testCategories[0].name)
    });

    this.testService.testCategoriesChanged.subscribe((testCategories: [TestCategory]) => {
      this.testCategories = this.testService.testCategories

      //Set default values
      selectTestCategory.setValue(this.testCategories[0].name)
    });
  }
}
