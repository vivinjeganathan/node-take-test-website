import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  //templateUrl: './playground.component.html',
  template: `
    Message: {{message}}
    <app-component-child (messageEvent)="receiveMessage($event)"></app-component-child>
  `,
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message:string;

  receiveMessage($event) {
    this.message = $event
    console.log("custom message: " + this.message)
  }

}
