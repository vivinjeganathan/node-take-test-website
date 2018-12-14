import { Component, OnInit, Input} from '@angular/core';
import { Question } from '../question.model';
import { SearchQuestionService } from './search-question.service';
import { QuestionService } from '../question.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css'],
  providers: [SearchQuestionService]
})

export class SearchQuestionComponent {

  questions: Question[]
  public formGroup: FormGroup;
  
  constructor(private searchQuestionService: SearchQuestionService, 
              private questionService: QuestionService,   
              public formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    
    this.searchQuestionService.questionsChanged.subscribe((question: Question) => {
      
      this.questions = this.searchQuestionService.questions
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {

      this.questions = this.searchQuestionService.getQuestions(params)
    });

    this.formGroup = this.formBuilder.group({
    })
  }

  onDeleteQuestion(question: Question) {
    this.searchQuestionService.deleteQuestion(question)
  }

  onSelectValue() {

    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.resetAllQueryParams(queryParams)

    this.setQueryParam('subject', queryParams)
    this.setQueryParam('unit', queryParams)
    this.setQueryParam('chapter', queryParams)
    
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  } 

  setQueryParam(param: string, queryParams: Params) {

    let value = this.formGroup.get(param).value as string

    if(value && value != 'Select') {
      queryParams[param] = value
    } else {
      queryParams[param] = null
    }
  }

  resetAllQueryParams(queryParams: Params) {
    queryParams['subject'] = null
    queryParams['unit'] = null
    queryParams['chapter'] = null
  }
}
