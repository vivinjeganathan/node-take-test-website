import { Subject } from "../question/subject.model";

export class Examination {
    public name: string;
    public testCategory: [TestCategory];
}

export class TestCategory {
    public name: string
    public subjects: [SubjectInTestCategory]
    public maxNoOfQuestions: string
    public maxMarks: string
    public negativeMarkingPercentage: string
    public duration: string
    public insructionSet: string
    public tests:[Test]
}

export class Test {
    public name: string
    public examination: string
    public testCategory: string
    public difficultyLevel: string
    public subjects: Array<SubjectInTestCategory>
    public negativeMarkingPercentage: string
    public duration: string
    public instructionSet: string
    public maxMarks: string
}

export class SubjectInTestCategory {
    public subject: Subject
    public maxNoOfQuestions: string
    public maxMarks: string
    public questions: [string]
}