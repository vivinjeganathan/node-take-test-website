import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.css']
})
export class QuestionSummaryComponent implements OnInit {

  @Input() question: Question;
  @Output() questionDeleted = new EventEmitter<{question: Question}>();

  constructor() { }

  ngOnInit() {
  }

  OnDeleteQuestion() {

    this.questionDeleted.emit({question: this.question});
  }

}
