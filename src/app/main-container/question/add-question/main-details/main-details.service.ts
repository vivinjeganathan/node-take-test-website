import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { OptionDetails } from "./option-details/option-details.model";

@Injectable()
export class MainDetailsService {

    optionDetailsArray: OptionDetails[] = []
    group1: FormGroup

    constructor(private formBuilder: FormBuilder) {

        for(let i=0;i<4;i++) {

            var optionDetails = new OptionDetails
            optionDetails.title = 'Option ' + (i+1)
            this.optionDetailsArray.push(optionDetails)
        } 
    }

    getFormGroup() {

        let group: any = {};

        this.optionDetailsArray.forEach(optionDetails => {
            
            // const control: FormControl = new FormControl('', null);
            // group.addControl(optionDetails.title, control)
            group[optionDetails.title] = new FormControl('', null);
        });

        this.group1 = new FormGroup(group);
    }
}