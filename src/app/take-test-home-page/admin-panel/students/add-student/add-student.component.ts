import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, 
              private studentService: StudentService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'gender': new FormControl(''),
      'username': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'dob': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl(''),
      'addressLine1': new FormControl(''),
      'addressLine2': new FormControl(''),
      'city': new FormControl(''),
      'state': new FormControl(''),
      'zipCode': new FormControl(''),
      'country': new FormControl(''),
      'interestedExams': new FormControl(''),
    })
  }

  onSendInvite() {
    this.studentService.sendInviteToStudentUser(this.registerForm);
  }
}
