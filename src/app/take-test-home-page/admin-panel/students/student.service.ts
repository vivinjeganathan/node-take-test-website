import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import {environment} from '../../../../environments/environment';
import { StudentUser } from "./student.model";
import { FormGroup } from "@angular/forms";

@Injectable()
export class StudentService {

    studentUsers: StudentUser[] = []
    studentUserURL: string = environment.serverUrl + '/studentUser'

    constructor(private http: HttpClient) { }

    studentUsersChanged = new EventEmitter<StudentUser[]>()

    getAllStudentUsers() {

        this.studentUsers.length = 0

        this.http.get(this.studentUserURL).subscribe(
            (response) => {
                
                this.studentUsers = response as [StudentUser]
                this.studentUsersChanged.emit(this.studentUsers)
            },
            (error) => console.log(error)
        )
    
        return this.studentUsers
    }
    
    addStudentUser(formGroup: FormGroup) {

        this.http.post(this.studentUserURL, formGroup.value).subscribe(
            
            (response) => {
                console.log(response)
            } ,
            (error) => console.log(error)
        )
    }

    OnDeleteStudentUser(studentUser: StudentUser) {
        
        var deleteUrl = this.studentUserURL + "/" + studentUser._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.studentUsers.splice(this.studentUsers.indexOf(studentUser), 1);
            this.studentUsersChanged.emit(this.studentUsers)
        }, (error) => console.log(error))
    }
}