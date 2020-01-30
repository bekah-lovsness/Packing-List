import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.css']
})
export class TravelInfoComponent implements OnInit {
  message;
  location;
  info;

  @Output() sendInfoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event;
  }

sendInfo(){
  this.info = this.message;
  this.sendInfoEvent.emit(this.info);
}

}
