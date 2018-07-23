import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [
    new Question("Sample question 1"), 
    new Question("Sample Question 2")
  ]
  //this.questionService.questions
  selectedTab = 'searchQuestions'

  constructor(private questionService: QuestionService) { }

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
