import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Examination, TestCategory, ExaminationGroup, Test } from '../../tests/test.model';
import { TestService } from '../../tests/test.service';
import { SearchTestService } from '../../tests/search-test/search-test.service';
import { Product } from '../product.model';
import { ProductTestsAddComponent } from './product-tests-add/product-tests-add.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  isAcademicProduct = false
  product: Product

  public formGroup: FormGroup;

  examinationGroups: ExaminationGroup[]
  tests: Test[]

  constructor(private formBuilder: FormBuilder,
              private testService: TestService,
              private searchTestService: SearchTestService,
              private modalService: NgbModal) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      
    })
    
    let selectExaminationGroup = new FormControl('')
    let selectTestFormControl = new FormControl('')
    
    this.formGroup.addControl('productName', new FormControl(''))
    this.formGroup.addControl('selectTestFormControl', selectExaminationGroup)
    this.formGroup.addControl('examGroupSelectFormControl', selectTestFormControl)
    this.formGroup.addControl('academicProduct', new FormControl(''))
    
    this.examinationGroups = this.testService.getExaminationGroups()

    this.testService.examinationGroupsChanged.subscribe((examinationGroups: ExaminationGroup[]) => {
      
      this.examinationGroups = this.testService.examinationGroups
      selectExaminationGroup.setValue(this.examinationGroups[0].name)
    });

    selectExaminationGroup.valueChanges.subscribe((value) => {

      let examGroup = this.examinationGroups.filter(examinationGroup => (examinationGroup.name == value))[0]
      let selectedExaminationGroup = examGroup

      let params = { "examinationGroup": selectedExaminationGroup._id }
      this.tests = this.searchTestService.getTests(params)
    });

    this.searchTestService.testsChanged.subscribe((tests: Test[]) => {
      this.tests = this.searchTestService.tests
    });
  }

  onSelectionChange(entry) {
    this.isAcademicProduct = !this.isAcademicProduct
  }

  open() {

    const modalRef = this.modalService.open(ProductTestsAddComponent, { size: 'lg' });
    // modalRef.componentInstance.product = this.product
    // modalRef.componentInstance.modalRef = modalRef
    // modalRef.componentInstance.formGroup = this.formGroup
  }

  onAddProduct() {

  }
}
