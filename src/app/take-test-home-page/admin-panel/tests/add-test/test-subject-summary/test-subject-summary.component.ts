import { Component, OnInit, Input } from '@angular/core';
import { SubjectInTestCategory } from '../../test.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Question } from 'src/app/main-container/question/question.model';
import { SearchQuestionService } from 'src/app/main-container/question/search-question/search-question.service';
import { TestQuestionListModalComponent } from '../test-question-list-modal/test-question-list-modal.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-subject-summary',
  templateUrl: './test-subject-summary.component.html',
  styleUrls: ['./test-subject-summary.component.css']
})
export class TestSubjectSummaryComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() subjectInTestCategory: SubjectInTestCategory
  constructor(private modalService: NgbModal) {}

  ngOnInit() {

    let maxMarksControl = new FormControl('')
    this.formGroup.addControl('maxMarks', maxMarksControl)

    let noOfQuestionsControl = new FormControl('')
    this.formGroup.addControl('noOfQuestions', noOfQuestionsControl)

    maxMarksControl.setValue(this.subjectInTestCategory.maxMarks)
    noOfQuestionsControl.setValue(this.subjectInTestCategory.maxNoOfQuestions)
  }

  open() {

    const modalRef = this.modalService.open(TestQuestionListModalComponent, { size: 'lg' });
    modalRef.componentInstance.subjectInTestCategory = this.subjectInTestCategory
    modalRef.componentInstance.modalRef = modalRef
    modalRef.componentInstance.formGroup = this.formGroup
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
