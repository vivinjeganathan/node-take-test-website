import { Subject } from "../question/subject.model";

export class TestCategory {
    public name: string
    public maxNoOfQuestions: string
    public subjects: [Subject]
    public duration: string
    public insructionSet: string
    public tests:[Test]
}

export class Examination {
    public name: string;
    public testCategory: [TestCategory];
}

export class Test {
    public name: string
    public subjects: [string]
    public questions: [string]
}