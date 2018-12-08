import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Examination, TestCategory } from '../../tests/test.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  
  public formGroup: FormGroup;

  examinations: Examination[]
  testCategories: TestCategory[]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {



    this.formGroup = this.formBuilder.group({
      
    })

    let examSelectFormControl = new FormControl('')
    let testCategorySelectFormControl = new FormControl('')

    this.formGroup.addControl('examSelectFormControl', examSelectFormControl)
    this.formGroup.addControl('testName', new FormControl(''))
    this.formGroup.addControl('selectTestCategory', testCategorySelectFormControl)
  }

}
