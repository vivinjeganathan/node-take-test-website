import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { OptionDetails } from './option-details/option-details.model';
import { MainDetailsService } from './main-details.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {

  description: String
  optionDetailsArray: OptionDetails[] = []
  optionDetailsFormGroups: FormGroup[] = []

  @Input() formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private mainDetailsService: MainDetailsService) { }

  ngOnInit() {
    
    this.optionDetailsArray = this.mainDetailsService.optionDetailsArray
    let formArray = this.formGroup.get('options') as FormArray

    this.formGroup.addControl('description', new FormControl(''))

    for(let i = 0; i < this.optionDetailsArray.length; i++) {

      let formGroup = this.formBuilder.group({})
      this.optionDetailsFormGroups.push(formGroup)
      formArray.push(formGroup)
    }
  }

  get optionsFormArray() {
     return <FormArray>this.formGroup.get('options'); 
  }
}
