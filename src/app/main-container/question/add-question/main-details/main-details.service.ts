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
            optionDetails.name = 'Option' + (i+1)
            optionDetails.title = 'Option ' + (i+1)
            this.optionDetailsArray.push(optionDetails)
        } 
    }
}