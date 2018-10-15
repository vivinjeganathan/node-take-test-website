export class TestCategory {
    public name: string
    public subjects: [string]
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