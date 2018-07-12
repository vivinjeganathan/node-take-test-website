import { Component, OnInit } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
})
export class AddQuestionComponent implements OnInit {

  question: Question[] = [
    new Question("my ques")
  ]
  constructor() { }

  ngOnInit() {
  }

}
