import { Component, OnInit} from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
})
export class SearchQuestionComponent implements OnInit {

  questions: Question[] = [
    new Question("first desc"),
    new Question("sec desc"),
    new Question("third desc")
  ]
  
  constructor() { }

  ngOnInit() {
  }

  onDeleteQuestion(question: Question) {

    this.questions.splice(this.questions.indexOf(question), 1);
  }

}
