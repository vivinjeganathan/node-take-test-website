import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from './question.model';
import { QuestionService } from './question.service';
//import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit{

  selectedTab = 'searchQuestions'

  constructor(private questionService: QuestionService) { }

  ngOnInit() {

  }

  onSelectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
