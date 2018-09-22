import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { OptionDetails } from './option-details.model';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { MainDetailsService } from '../main-details.service';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.component.html',
  styleUrls: ['./option-details.component.css'],
})
export class OptionDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() optionDetails: OptionDetails;
  // @Output() formInitialized = new EventEmitter<FormGroup>()

  constructor(private formBuilder: FormBuilder, private mainDetailsService: MainDetailsService) { }

  ngOnInit() {

    // this.optionDetailsSubForm = this.formBuilder.group({
      
    // })

    // this.optionDetailsSubForm = this.mainDetailsService.group1

    // const control: FormControl = new FormControl('', null);
    // this.optionDetailsSubForm.addControl(this.optionDetails.title,control)

    // this.formInitialized.emit(this.optionDetailsSubForm);
  }



}
