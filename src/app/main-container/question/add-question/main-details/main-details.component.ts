import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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

  // @Output() formInitialized = new EventEmitter<FormGroup>()
  @Input() formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private mainDetailsService: MainDetailsService) { }

  ngOnInit() {
    
    this.optionDetailsArray = this.mainDetailsService.optionDetailsArray
    // this.mainDetailsService.getFormGroup()
    
    // this.mainDetailsSubForm = this.formBuilder.group({
    //   description: null,
    // })

    this.formGroup.addControl('description', new FormControl('description'))

    // this.formInitialized.emit(this.mainDetailsSubForm);
  }

  // subFormInitialized(name: string, form: FormGroup) {
  //   this.mainDetailsSubForm.setControl(name, form);
  // }

}
