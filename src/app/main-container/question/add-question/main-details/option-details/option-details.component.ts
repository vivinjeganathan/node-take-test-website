import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { OptionDetails } from './option-details.model';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, FormControl, FormGroupName } from '@angular/forms';
import { MainDetailsService } from '../main-details.service';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.component.html',
  styleUrls: ['./option-details.component.css'],
})
export class OptionDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() optionDetails: OptionDetails

  constructor(private formBuilder: FormBuilder, private mainDetailsService: MainDetailsService) { }

  ngOnInit() {

    this.formGroup.addControl('value', new FormControl(''))    
  }



}
