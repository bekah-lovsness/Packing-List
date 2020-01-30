import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  location;
  days;
  message;

  @Output() messageEvent = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  assignValues(location: string, days: string){
    this.location = location;
    this.days = days;
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(){
    let messageArray = [this.location, this.days]
    this.messageEvent.emit(messageArray); 
  }


}
