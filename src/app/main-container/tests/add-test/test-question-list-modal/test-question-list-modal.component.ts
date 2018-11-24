import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/main-container/question/question.model';
import { SearchQuestionService } from 'src/app/main-container/question/search-question/search-question.service';
import { SubjectInTestCategory } from '../../test.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-test-question-list-modal',
  templateUrl: './test-question-list-modal.component.html',
  styleUrls: ['./test-question-list-modal.component.css']
})
export class TestQuestionListModalComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() subjectInTestCategory: SubjectInTestCategory
  @Input() questions: Question[]
  @Input() modalRef: NgbModalRef;

  constructor(private searchQuestionService: SearchQuestionService) {}

  ngOnInit() {

    this.searchQuestionService.questionsChanged.subscribe((questionsA: Question[]) => {
      
      if (this.subjectInTestCategory.questions != undefined) {
        
        for (let question1 of this.subjectInTestCategory.questions) {
          for (let question2 of questionsA) {
            if (question1._id == question2._id) {
              question2.isSelected = true
              break
            }
          }
        }
      }
      
      this.questions = questionsA
    });

    this.questions = this.searchQuestionService.getQuestions({'subject':this.subjectInTestCategory.subject.name})
  }
  
  onSaveQuestions() {
    var selectedQuestions = (this.questions).filter((question) => 
                (question.isSelected == true))
    this.subjectInTestCategory.questions = selectedQuestions
    
    this.modalRef.close('Save click')
  }

  onClose() {
    this.modalRef.close('close click')
  }
}
