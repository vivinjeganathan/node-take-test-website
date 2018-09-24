import { Component, OnInit, Input} from '@angular/core';
import { Question } from '../question.model';
import { SearchQuestionService } from './search-question.service';
import { QuestionService } from '../question.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  providers: [SearchQuestionService]
})

export class SearchQuestionComponent {

  questions: Question[]
  public formGroup: FormGroup;
  
  constructor(private searchQuestionService: SearchQuestionService, private questionService: QuestionService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questions = this.searchQuestionService.getQuestions()
    this.searchQuestionService.questionsChanged.subscribe((question: Question) => {
      
      this.questions = this.searchQuestionService.questions
      console.log('In sear - ' + this.questions)
      
    });

    this.formGroup = this.formBuilder.group({
    })
  }

  onDeleteQuestion(question: Question) {
    this.searchQuestionService.deleteQuestion(question)
  }
}
