import { Component, OnInit, Input } from '@angular/core';
import { Test, TestCategory, SubjectInTestCategory } from '../../test.model';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-subject-details',
  templateUrl: './test-subject-details.component.html',
  styleUrls: ['./test-subject-details.component.css']
})
export class TestSubjectDetailsComponent implements OnInit {

  @Input() test: Test
  @Input() testCategory: TestCategory
  @Input() formGroup: FormGroup;
  
  subjectsInTestCategory: Array<SubjectInTestCategory>
  subjectFormGroups: FormGroup[] = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

  ngOnChanges() {

    if (this.testCategory !== undefined && this.testCategory.subjects !== undefined) {
      this.subjectsInTestCategory = this.testCategory.subjects

      let formArray = this.formGroup.get('subjects') as FormArray
      this.clearFormArray(formArray)
      
      for(let i = 0; i < this.subjectsInTestCategory.length; i++) {

        let formGroup = this.formBuilder.group({
          'questions': this.formBuilder.array([])
        })
        this.subjectFormGroups.push(formGroup)
        formArray.push(formGroup)
      }
    }
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

}
