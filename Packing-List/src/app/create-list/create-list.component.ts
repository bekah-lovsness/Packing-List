import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
info;
location;
days;

  constructor() { }

  ngOnInit() {
  }

  receiveInfo($event){
    this.info = $event;
    this.location = this.info[0];
    this.days = this.info[1];
    this.days = Number(this.days);

  }
}
