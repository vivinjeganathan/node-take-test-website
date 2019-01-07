import { Test } from "../tests/test.model";
import { StudentUser, StudentBatch } from "../students/student.model";

export class Product {
    public _id: string
    public name: string
    public description: string
    public startTime: string
    public endTime: string
    public isAcademicProduct: string
    public productCost: string
    public tests: Array<Test>
    public associatedStudentBatches: Array<StudentBatch>
}