import { Component, OnInit, Input} from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from '../question.model';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
})
export class SearchQuestionComponent implements OnInit {

  @Input() questions: Question[]
  
  constructor() { }

  ngOnInit() {
  }

  onDeleteQuestion(question: Question) {
    console.log(question);
    this.questions.splice(this.questions.indexOf(question), 1);
  }

}
