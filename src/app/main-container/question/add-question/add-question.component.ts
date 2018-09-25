import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '../../../../../node_modules/@angular/forms';

import { Question } from '../question.model';
import { AddQuestionService } from './add-question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  providers:[AddQuestionService]
})
export class AddQuestionComponent {

  public addQuestionFormGroup: FormGroup;
  
  constructor(private addQuestionService: AddQuestionService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addQuestionFormGroup = this.formBuilder.group({
      'options': this.formBuilder.array([])
    })
  }
              
  onAddQuestion() {
    this.addQuestionService.addQuestion(this.addQuestionFormGroup)
  } 

  onSelectValue() {
    console.log('value change notified')
  }
}
