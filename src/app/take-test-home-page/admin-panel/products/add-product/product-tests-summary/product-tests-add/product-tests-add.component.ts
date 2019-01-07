import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../product.model';
import { Test } from 'src/app/take-test-home-page/admin-panel/tests/test.model';
import { SearchTestService } from 'src/app/take-test-home-page/admin-panel/tests/search-test/search-test.service';

@Component({
  selector: 'app-product-tests-add',
  templateUrl: './product-tests-add.component.html',
  styleUrls: ['./product-tests-add.component.css']
})
export class ProductTestsAddComponent implements OnInit {

  @Input() product: Product
  @Input() modalRef: NgbModalRef;
  
  tests: Test[]
  
  constructor(private searchTestService: SearchTestService,
              private modalService: NgbModal) { }

  ngOnInit() {

    this.tests = this.searchTestService.getTests({})

    this.searchTestService.testsChanged.subscribe((tests: Test[]) => {
      this.tests = this.searchTestService.tests
    });
  }

  onClose() {
    this.modalRef.close('close click')
  }

  onSaveTests() {
    var selectedTests = (this.tests).filter((test) => 
                (test.isSelected == true))
    this.product.tests = selectedTests
    
    this.modalRef.close('Save click')
    console.log(this.product)
  }

}
