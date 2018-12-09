import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
//import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit{

  constructor(private questionService: QuestionService) { }

  ngOnInit() {

  }
}
