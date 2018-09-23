import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomSelector } from './custom-selector/custom-selector.model';
import { BasicDetailsService } from '../../basic-details.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup;

  questionTypesSelector: CustomSelector
  subjectsSelector: CustomSelector
  unitsSelector: CustomSelector
  chaptersSelector: CustomSelector
  
  constructor(private formBuilder: FormBuilder, private basicDetailsService: BasicDetailsService) { }

  ngOnInit() {

    this.basicDetailsService.createSelectors()
    this.questionTypesSelector = this.basicDetailsService.questionTypesSelector
    this.subjectsSelector = this.basicDetailsService.subjectsSelector
    this.unitsSelector = this.basicDetailsService.unitsSelector
    this.chaptersSelector = this.basicDetailsService.chaptersSelector

    this.basicDetailsService.getQuestionTypes().subscribe(questionTypesSelector => {

      this.questionTypesSelector.selectedOption = this.questionTypesSelector.options[0]
      this.formGroup.get('type').setValue(this.questionTypesSelector.selectedOption)
    })

    this.basicDetailsService.getSubjects().subscribe(subjectsSelector => {

      this.subjectsSelector = subjectsSelector
      this.subjectsSelector.selectedOption = this.subjectsSelector.options[0]
      this.formGroup.get('subject').setValue(this.subjectsSelector.selectedOption)

      this.unitsSelector = this.basicDetailsService.getUnits(this.subjectsSelector.selectedOption)
      this.unitsSelector.selectedOption = this.unitsSelector.options[0]
      this.formGroup.get('unit').setValue(this.unitsSelector.selectedOption)

      this.chaptersSelector = this.basicDetailsService.getChapters(subjectsSelector.selectedOption, this.unitsSelector.selectedOption)
      this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
      this.formGroup.get('chapter').setValue(this.chaptersSelector.selectedOption)
    })
  }

  onSelectQuestionType(question: CustomSelector) {
    
  }

  onSelectSubject(customSelector: CustomSelector) {
    
    this.unitsSelector = this.basicDetailsService.getUnits(customSelector.selectedOption)
    this.unitsSelector.selectedOption = this.unitsSelector.options[0]
    this.formGroup.get('unit').setValue(this.unitsSelector.selectedOption)

    this.chaptersSelector = this.basicDetailsService.getChapters(customSelector.selectedOption, this.unitsSelector.selectedOption)
    this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
    this.formGroup.get('chapter').setValue(this.chaptersSelector.selectedOption)
  }

  onSelectunit(customSelector: CustomSelector) {

    this.chaptersSelector = this.basicDetailsService.getChapters(this.subjectsSelector.selectedOption, customSelector.selectedOption)
    this.chaptersSelector.selectedOption = this.chaptersSelector.options[0]
    this.formGroup.get('chapter').setValue(this.chaptersSelector.selectedOption)
  }

  onSelectChapter(question: CustomSelector) {
    
  }
} 
