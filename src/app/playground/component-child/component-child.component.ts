import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-child',
  //templateUrl: './component-child.component.html',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
