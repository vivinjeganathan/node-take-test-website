import { FormGroup } from "../../../../node_modules/@angular/forms";

export class Question {
    public _id: string;
    public exam: string;
    public subject: string;
    public unit: string;
    public chapter: string; 
    public type: string;
    public description: string;
    public options: Option[];
    public correctOption: string;
    public complexity: string;
    public maxTimeLimit: string;
    public solutionDescription: string;
}

export class Option {
    public value: string
}