import { Subject } from "../question/subject.model";

export class Examination {
    public name: string;
    public testCategory: [TestCategory];
}

export class TestCategory {
    public name: string
    public subjects: [Subject]
    public maxNoOfQuestions: string
    public maxMarks: string
    public negativeMarkingPercentage: string
    public duration: string
    public insructionSet: string
    public tests:[Test]
}

export class Test {
    public name: string
    public difficultyLevel: string
    public subjects: [string]
    public questions: [string]
}