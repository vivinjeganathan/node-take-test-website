export class Question {
    public forExam: string;
    public forSubject: string;
    public unit: string;
    public chapter: string; 
    public type: string;
    public description: string;
    public options: string[];
    public correctOption: string;
    public complexity: string;
    public maxTimeLimit: string;
    public solutionDescription: string;

    constructor(desc: string) {
        this.description = desc;
    }
}