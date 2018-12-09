import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentUser } from '../../student.model';

@Component({
  selector: 'app-student-user-summary',
  templateUrl: './student-user-summary.component.html',
  styleUrls: ['./student-user-summary.component.css']
})
export class StudentUserSummaryComponent implements OnInit {

  @Input() studentUser: StudentUser;  
  @Input() number: number;
  @Output() studentUserDeleted = new EventEmitter<StudentUser>();

  
  constructor() { }

  ngOnInit() {
  }

  OnDeleteStudentUser() {

    this.studentUserDeleted.emit(this.studentUser);
  }
}
