import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentUser } from '../student.model';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  studentUsers: StudentUser[]

  constructor(private studentService: StudentService ) { }

  ngOnInit() {

    this.studentService.studentUsersChanged.subscribe((studentUser: StudentUser) => {
      
      this.studentUsers = this.studentService.studentUsers
    });
    this.studentUsers = this.studentService.getStudentUsers(null)
  }

  OnDeleteStudentUser(studentUser: StudentUser) {
    this.studentService.OnDeleteStudentUser(studentUser)
  }
}
