import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ExaminationGroup } from '../../../tests/test.model';
import { ProductService } from '../../product.service';
import { TestService } from '../../../tests/test.service';

@Component({
  selector: 'app-product-search-by',
  templateUrl: './product-search-by.component.html',
  styleUrls: ['./product-search-by.component.css']
})
export class ProductSearchByComponent implements OnInit {

  @Input() formGroup: FormGroup

  examinationGroups: ExaminationGroup[] = []

  @Output() examinationGroupsValueChanged = new EventEmitter<ExaminationGroup>();
  @Output() productNameChanged = new EventEmitter<string>();
  
  constructor(private testService: TestService,
              private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    let selectExamination = new FormControl('')

    this.formGroup.addControl('examinationGroup', selectExamination)
    this.formGroup.addControl('productName', new FormControl(''))

    this.examinationGroups = this.testService.getExaminationGroups()

    selectExamination.valueChanges.subscribe((value) => {

      let examGroup = this.examinationGroups.filter(examinationGroup => (examinationGroup.name == value))[0]
      this.examinationGroupsValueChanged.emit(examGroup)
    }); 

    this.testService.examinationGroupsChanged.subscribe((examinationGroups: ExaminationGroup[]) => {
      this.examinationGroups = this.testService.examinationGroups
    });
  }

  onSearchTap() {
    this.productNameChanged.emit(this.formGroup.get('productName').value)
  }

}
