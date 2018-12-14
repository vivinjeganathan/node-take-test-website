import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Test } from '../../test.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestService } from '../../test.service';
import { FormBuilder } from '@angular/forms';
import { SearchTestService } from '../search-test.service';
import { PreviewQuestionPaperComponent } from '../../preview-question-paper/preview-question-paper.component';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {

  @Input() test: Test
  @Input() number: Number
  @Output() testDeleted = new EventEmitter<Test>();
  
  constructor(private modalService: NgbModal,
              private searchTestService: SearchTestService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  
  onDeleteTest() {
    this.testDeleted.emit(this.test)
  }

  openQuestionPaperInModal() {
    
    this.searchTestService.getTestDetails(this.test)

    this.searchTestService.testChanged.subscribe((test: Test) => {
      
      this.test = this.searchTestService.test
      console.log(this.test)
      const modalRef = this.modalService.open(PreviewQuestionPaperComponent, { size: 'lg' });
      modalRef.componentInstance.test = this.test
      modalRef.componentInstance.modalRef = modalRef
      
    });
  }
}
