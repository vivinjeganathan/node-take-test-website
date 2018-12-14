import { Subject } from "../question/subject.model";
import { Question } from "../question/question.model";

export class ExaminationGroup    {
    public _id: string;
    public name: string;
}

export class Examination {
    public _id: string;
    public name: string;
    public examinationGroup: ExaminationGroup;
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
    public examination: Examination;
    public examinationGroup: ExaminationGroup;
}

export class Test {
    public _id: string;
    public name: string
    public difficultyLevel: string
    public negativeMarkingPercentage: string
    public duration: string
    public instructionSet: InstructionSet
    public maxMarks: string
    public subjects: Array<SubjectInTestCategory>
    public testCategory: TestCategory
    public examination: Examination
    public examinationGroup: ExaminationGroup
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