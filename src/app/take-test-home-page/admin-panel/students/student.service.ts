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

    getStudentUsers(id: string) {

        this.studentUsers.length = 0

        let queryParams = new HttpParams();

        if (id != undefined) {
            queryParams = queryParams.append('_id', id);
        }

        this.http.get(this.studentUserURL , { params: queryParams } ).subscribe(
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

    updateStudentUser(formGroup: FormGroup, id: string) {

        var json = JSON.parse(JSON.stringify(formGroup.value))
        json['studentId'] = id
        console.log(json)
        this.http.patch(this.studentUserURL, json).subscribe(
            
            (response) => {
                console.log(response)
            } ,
            (error) => console.log(error)
        )
    }

    sendInviteToStudentUser(formGroup: FormGroup, link: string) {

        
        let subjectsJson = {"username" :formGroup.get('username').value, 
                            "mobileNumber": formGroup.get('mobileNumber').value,
                            "websiteLink": link}

        var sendInviteUrl = this.studentUserURL + "/" + 'sendInvite'
        this.http.post(sendInviteUrl, subjectsJson).subscribe(
            
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