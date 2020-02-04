import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  @Input() travelInfo : (string)[];
  location: string;
  days:number;
  clothesKeys: string[];
  clothesValues: number[];

  ClothesList = {
    underwear:1,
    socks:1,
    shirts:1,
    pants:1,
    pajamas:1,
    shoes: 1
  }

  constructor() { }

  ngOnInit() {
    this.assignValues();
    this.updatePackingList();
    this.getKeysAndValues();
    this.createTable();
  }

 assignValues(){
  this.location = this.travelInfo[0];
  this.days = Number(this.travelInfo[1]);
 } 

 updatePackingList(){
  this.ClothesList.underwear += this.days;
  this.ClothesList.socks += this.days;
  this.ClothesList.shirts += this.days;

  if (this.days > 1){
    this.ClothesList.pants = this.days - 1;
  }
  if (this.days > 3 && this.days < 7){
    this.ClothesList.shoes = 2;
    this.ClothesList.pajamas = 2;
  } else if (this. days >= 7){
    this.ClothesList.shoes = 3;
    this.ClothesList.pajamas= 3;
  }
 }

 getKeysAndValues (){
   this.clothesKeys = Object.keys(this.ClothesList);
   this.clothesValues = Object.values(this.ClothesList);
 }

 createTable() {
  let tbody = document.getElementById('tbody');
  let tbodyStr = "";

  for (let i = 0; i < this.clothesKeys.length; i++){
    tbodyStr += '<tr><td>' + this.clothesValues[i] + '</td>'
    + '<td>' + this.clothesKeys[i] + '</td></tr>';
  }
  tbody.innerHTML = tbodyStr;
 }
  

}
