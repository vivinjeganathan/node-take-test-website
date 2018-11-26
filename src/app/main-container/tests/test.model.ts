import { Subject } from "../question/subject.model";
import { Question } from "../question/question.model";

export class Examination {
    public _id: string;
    public name: string;
    public testCategory: [TestCategory];
}

export class TestCategory {
    public _id: string;
    public name: string
    public subjects: [SubjectInTestCategory]
    public maxNoOfQuestions: string
    public maxMarks: string
    public negativeMarkingPercentage: string
    public duration: string
    public insructionSet: InstructionSet
    public tests:[Test]
}

export class Test {
    public name: string
    public examination: string
    public testCategory: string
    public difficultyLevel: string
    public negativeMarkingPercentage: string
    public duration: string
    public instructionSet: InstructionSet
    public maxMarks: string
    public subjects: Array<SubjectInTestCategory>
}

export class SubjectInTestCategory {
    public subject: Subject
    public maxNoOfQuestions: string
    public maxMarks: string
    public questions: Question[]
}

export class InstructionSet {
    public name: string
    public instructions: string[]
}