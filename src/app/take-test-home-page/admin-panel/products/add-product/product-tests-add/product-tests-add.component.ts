import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../../tests/test.model';
import { SearchTestService } from '../../../tests/search-test/search-test.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-tests-add',
  templateUrl: './product-tests-add.component.html',
  styleUrls: ['./product-tests-add.component.css']
})
export class ProductTestsAddComponent implements OnInit {

  tests: Test[]
  @Input() modalRef: NgbModalRef;
  
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
    
  }

}
