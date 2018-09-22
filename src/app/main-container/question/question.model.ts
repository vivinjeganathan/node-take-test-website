import { FormGroup } from "../../../../node_modules/@angular/forms";

export class Question {
    public _id: string;
    public exam: string;
    public subject: string;
    public unit: string;
    public chapter: string; 
    public type: string;
    public description: string;
    public options: string[];
    public correctOption: string;
    public complexity: string;
    public maxTimeLimit: string;
    public solutionDescription: string;

    constructor(formObject: FormGroup) {

        console.log('asdfg----------')
        console.log(formObject)
        
        let basicDetails = this.getBasicDetails(formObject)

        // this.exam = basicDetails.get('exam').value
        this.subject = basicDetails.get('subject').value
        this.unit = basicDetails.get('unit').value
        this.chapter = basicDetails.get('chapter').value
        this.type = basicDetails.get('type').value

        let mainDetails = this.getMainDetails(formObject)

        
        this.description = mainDetails.get('description').value
        this.options = [mainDetails.get('optionDetailsSubForm').get('Option 1').value, mainDetails.get('optionDetailsSubForm').get('Option 2').value, mainDetails.get('optionDetailsSubForm').get('Option 3').value, mainDetails.get('optionDetailsSubForm').get('Option 4').value]
        this.correctOption = 'option1'

        let additionalDetails = this.getAdditionalDetails(formObject)

        this.complexity = additionalDetails.get('complexity').value
        this.maxTimeLimit = additionalDetails.get('maxTimeLimit').value
        this.solutionDescription = additionalDetails.get('solutionDescription').value
    }

    getBasicDetails(formObject: FormGroup) {
        return formObject.get('basicDetails')
    }

    getMainDetails(formObject: FormGroup) {
        return formObject.get('mainDetails')
    }

    getAdditionalDetails(formObject: FormGroup) {
        return formObject.get('additionalDetails')
    }
}