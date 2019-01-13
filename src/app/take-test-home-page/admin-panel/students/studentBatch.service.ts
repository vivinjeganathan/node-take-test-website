import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import {environment} from '../../../../environments/environment';
import { StudentBatch } from "./student.model";
import { FormGroup } from "@angular/forms";

@Injectable()
export class StudentBatchService {

    studentBatches: StudentBatch[] = []
    studentBatchURL: string = environment.serverUrl + '/studentBatch'

    constructor(private http: HttpClient) { }

    studentBatchesChanged = new EventEmitter<StudentBatch[]>()
    studentBatchAdded = new EventEmitter<StudentBatch>()

    getStudentBatchs(id: string) {

        let queryParams = new HttpParams();

        if (id != undefined) {
            queryParams = queryParams.append('_id', id);
        }

        this.studentBatches.length = 0
        this.studentBatches.push(this.getDummyStudentBatch())
                
        this.http.get(this.studentBatchURL , { params: queryParams } ).subscribe(
            (response) => {
                this.studentBatches = this.studentBatches.concat(response as [StudentBatch])
                this.studentBatchesChanged.emit(this.studentBatches)
                console.log(this.studentBatches)
            },
            (error) => console.log(error)
        )
    
        return this.studentBatches
    }
    
    getDummyStudentBatch(): StudentBatch {

        var studentBatch = new StudentBatch
        studentBatch.name = 'Select'

        return studentBatch;
    }

    addStudentBatch(formBatch: FormGroup, status: string) {

        // var json = JSON.parse(JSON.stringify(formBatch.value))

        // this.http.post(this.studentBatchURL, json).subscribe(
            
        //     (response) => {
        //         this.studentBatchAdded.emit(response as StudentBatch)
        //     } ,
        //     (error) => console.log(error)
        // )
    }

    updateStudentBatch(formBatch: FormGroup, id: string) {

    }

    OnDeleteStudentBatch(studentBatch: StudentBatch) {
        
        var deleteUrl = this.studentBatchURL + "/" + studentBatch._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.studentBatches.splice(this.studentBatches.indexOf(studentBatch), 1);
            this.studentBatchesChanged.emit(this.studentBatches)
        }, (error) => console.log(error))
    }
}