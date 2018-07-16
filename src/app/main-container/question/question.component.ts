import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [
    new Question("Sample question 1"), 
    new Question("Sample Question 2")
  ]

  selectedTab = 'searchQuestions'

  constructor() { }

  ngOnInit() {
  }

  onSelectTab(tabName: string) {
    console.log("tabname: " + tabName);
    this.selectedTab = tabName;
  }

  onAddQuestion(question: Question) {
    console.log("In Question component: " + question.description)
    this.questions.push(question)
  }
}
