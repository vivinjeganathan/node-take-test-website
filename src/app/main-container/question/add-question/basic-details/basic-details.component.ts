import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomSelector } from './custom-selector/custom-selector.model';
import { BasicDetailsService } from '../../basic-details.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  basicDetailsSubForm: FormGroup

  questionTypesSelector: CustomSelector
  subjectsSelector: CustomSelector
  unitsSelector: CustomSelector
  chaptersSelector: CustomSelector

  @Output() formInitialized = new EventEmitter<FormGroup>()
  
  constructor(private formBuilder: FormBuilder, private basicDetailsService: BasicDetailsService) { }

  ngOnInit() {
    this.basicDetailsSubForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      unit: null,
      chapter: null,
      type: null
    })
    
    this.basicDetailsService.getQuestionTypes().subscribe(questionTypesSelector => {

      this.questionTypesSelector = questionTypesSelector
    })

    this.basicDetailsService.getSubjects().subscribe(subjectsSelector => {

      this.subjectsSelector = subjectsSelector
      this.subjectsSelector.selectedOption = this.subjectsSelector.options[0]

      this.unitsSelector = this.basicDetailsService.getUnits(this.subjectsSelector.selectedOption)
      this.unitsSelector.selectedOption = this.unitsSelector.options[0]

      this.chaptersSelector = this.basicDetailsService.getChapters(subjectsSelector.selectedOption, this.unitsSelector.selectedOption)
      this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
    })

    this.formInitialized.emit(this.basicDetailsSubForm);
  }

  onSelectQuestionType(question: CustomSelector) {
    
  }

  onSelectSubject(customSelector: CustomSelector) {
    
    this.unitsSelector = this.basicDetailsService.getUnits(customSelector.selectedOption)
    this.unitsSelector.selectedOption = this.unitsSelector.options[0]

    this.chaptersSelector = this.basicDetailsService.getChapters(customSelector.selectedOption, this.unitsSelector.selectedOption)
    this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
  }

  onSelectunit(customSelector: CustomSelector) {

    this.chaptersSelector = this.basicDetailsService.getChapters(this.subjectsSelector.selectedOption, customSelector.selectedOption)
    this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
  }

  onSelectChapter(question: CustomSelector) {
    
  }
} 
