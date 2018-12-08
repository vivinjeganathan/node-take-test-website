import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  registerForm: FormGroup
  
  constructor(private formBuilder: FormBuilder) { }

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

}
