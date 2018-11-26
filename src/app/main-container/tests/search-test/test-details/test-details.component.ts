import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../test.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewQuestionPaperComponent } from '../../preview-question-paper/preview-question-paper.component';
import { SearchTestService } from '../search-test.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  @Input() test: Test
  @Input() number: Number

  constructor(private modalService: NgbModal, 
              private searchTestService: SearchTestService) { }

  ngOnInit() {
  }

  openQuestionPaperInModal() {
    
    this.searchTestService.getTestDetails(this.test)

    this.searchTestService.testChanged.subscribe((test: Test) => {
      
      this.test = this.searchTestService.test
      console.log(this.test)
      const modalRef = this.modalService.open(PreviewQuestionPaperComponent, { size: 'lg' });
      modalRef.componentInstance.test = this.test

    });

    
    //modalRef.componentInstance.modalRef = modalRef
  }
}
