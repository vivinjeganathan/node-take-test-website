import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/main-container/question/question.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-question-summary-modal',
  templateUrl: './test-question-summary-modal.component.html',
  styleUrls: ['./test-question-summary-modal.component.css']
})
export class TestQuestionSummaryModalComponent implements OnInit {

  @Input() question: Question;  
  @Input() number: number;
  @Output() questionDeleted = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {

  }
  
  selectedQuestion(){
    this.question.isSelected = !this.question.isSelected
  }
}
