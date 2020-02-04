import { Component, OnInit, EventEmitter, Output } from '@angular/core'; 

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

@Output() sendAnswers: EventEmitter<any> = new EventEmitter;

 location: string;
 days;
 answers= [];
 isInputValid: boolean = true;

  constructor() { }

  ngOnInit() {
  }

handleClick(location, days){
  this.location = location.value;
  this.days = days.value;
  if (this.location === "" || this.days === ""){
    window.alert("All fields required");
    this.isInputValid = false;
    event.preventDefault();
  } else if (!isNaN(location.value) || isNaN(Number(this.days)) || (Number(this.days) > 10)){
    window.alert("Enter valid info");
    this.isInputValid = false;
    event.preventDefault();
  } else {
    this.answers= [this.location, this.days];
  if (this.answers.length === 2){
    let result = window.confirm(`You are going to ${this.location} for ${this.days} days. 
      Is this correct?`);
      if (result){
    this.sendAnswersOnClick();
  } 
}
  }
  
  } 
  sendAnswersOnClick (){
    this.sendAnswers.emit(this.answers);
  }

}
