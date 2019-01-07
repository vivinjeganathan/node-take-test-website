import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from 'src/app/take-test-home-page/admin-panel/question/question.model';

@Component({
  selector: 'app-test-question-summary-modal',
  templateUrl: './test-question-summary-modal.component.html',
  styleUrls: ['./test-question-summary-modal.component.css']
})
export class TestQuestionSummaryModalComponent implements OnInit {

  @Input() question: Question;  
  @Input() number: number;

  constructor() { }

  ngOnInit() {

  }
  
  selectedQuestion(){
    this.question.isSelected = !this.question.isSelected
  }
}
