import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDetailsComponent } from './action-details.component';

describe('ActionDetailsComponent', () => {
  let component: ActionDetailsComponent;
  let fixture: ComponentFixture<ActionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// export class QuestionsComponent implements OnInit{

//   questionCreated = false
//   dynamicValue = 'Test';
//   allowNewServer = false;
//   questionDescription = 'test'
//   questionsArray = ['sample1', 'sample2']

//   constructor() {
//       setTimeout(()=> {
//           this.allowNewServer = true;
//       }, 2000);
//   }

//   ngOnInit() {

//   }
//   onCreateQuestion() {
//       this.questionsArray.push(this.questionDescription)
//       this.questionCreated = true
//       this.dynamicValue = 'question created with description ' + this.questionDescription;
//   }

//   onEditDescription(event: any) {
//       this.questionDescription = (<HTMLInputElement>event.target).value
//   }
// }