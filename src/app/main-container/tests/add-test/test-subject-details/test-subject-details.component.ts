import { Component, OnInit, Input } from '@angular/core';
import { Test, TestCategory, SubjectInTestCategory } from '../../test.model';

@Component({
  selector: 'app-test-subject-details',
  templateUrl: './test-subject-details.component.html',
  styleUrls: ['./test-subject-details.component.css']
})
export class TestSubjectDetailsComponent implements OnInit {

  @Input() test: Test
  @Input() testCategory: TestCategory
  subjectsInTestCategory: Array<SubjectInTestCategory>

  constructor() { }

  ngOnInit() {
    
    if (this.testCategory !== undefined) {
      this.subjectsInTestCategory = this.testCategory.subjects
    }
    
  }

}
