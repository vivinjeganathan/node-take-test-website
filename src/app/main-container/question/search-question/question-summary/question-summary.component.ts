import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.css']
})
export class QuestionSummaryComponent implements OnInit {

  @Input() question: Question;
  @Input() number: number;
  @Output() questionDeleted = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

  OnDeleteQuestion() {

    this.questionDeleted.emit(this.question);
  }

}
