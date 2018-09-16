export class Subject {
    public _id: string
    public name: string
    public units: Unit[]
}

export class Unit {
    public _id: string
    public name: string
    public chapters: Chapter[]
}

export class Chapter {
    public _id: string
    public name: string
}