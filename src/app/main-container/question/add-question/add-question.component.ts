import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
})
export class AddQuestionComponent implements OnInit {

  question: Question = new Question("my ques")
  @Output() questionAdded = new EventEmitter<Question>()
  
  constructor() { }

  ngOnInit() {
  }

  onAddQuestion() {

    console.log("onAddQuestion in parent: " + this.question.description);
    this.questionAdded.emit(this.question);
  }
}
