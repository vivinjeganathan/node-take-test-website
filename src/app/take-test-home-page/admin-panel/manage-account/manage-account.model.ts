import { Address } from "../students/student.model";

export class TakeTestAccount {
    public _id: string
    public companyName: string
    public proprietorName: string
    public username: string
    public password: string
    public confirmPassword: string
    public mobileNumber: string
    public supportEmail: string
    public supportMobile: string
    public address: Address
}

export class AdminUser {
    public _id: string
    public firstName: string
    public lastName: string
    public username: string
    public password: string
    public mobileNumber: string
    public profile: String
    public takeTestAccount: TakeTestAccount
}