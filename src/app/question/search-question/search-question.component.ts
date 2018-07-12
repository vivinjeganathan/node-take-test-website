import { Component, OnInit } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
})
export class SearchQuestionComponent implements OnInit {

  questions: Question[] = [
    new Question("my ques"),
    new Question("sec desc")
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
