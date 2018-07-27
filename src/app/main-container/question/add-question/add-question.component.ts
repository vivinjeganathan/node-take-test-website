import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';
import { AddQuestionService } from './add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  providers:[AddQuestionService]
})
export class AddQuestionComponent {

  question: Question = new Question("my ques")
  //@Output() questionAdded = new EventEmitter<Question>()
  
  constructor(private addQuestionService: AddQuestionService) { }

  onAddQuestion() {
    this.addQuestionService.addQuestion(this.question)
  } 
}
