import { Examination } from "../tests/test.model";

export class StudentUser {
    public _id: string;
    public firstName: string;
    public lastName: string;
    public mobileNumber: string;
    public gender: string;
    public dateOfBirth: string;
    public address: Address;
    public username: string
    public password: string
    public preferredExams: [Examination]
    public status: string
    public group: string
}

export class Address {
    public addressLine1: string;
    public addressLine2: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
}

export class StudentBatch {
    public _id: string
    public name: string
    public studentUsers: [StudentUser]
    public isSelected: Boolean
}