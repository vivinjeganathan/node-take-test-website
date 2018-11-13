import { Component, OnInit, Input } from '@angular/core';
import { SubjectInTestCategory } from '../../test.model';

@Component({
  selector: 'app-test-subject-summary',
  templateUrl: './test-subject-summary.component.html',
  styleUrls: ['./test-subject-summary.component.css']
})
export class TestSubjectSummaryComponent implements OnInit {

  @Input() subjectInTestCategory: SubjectInTestCategory

  constructor() { }

  ngOnInit() {
  }

}
