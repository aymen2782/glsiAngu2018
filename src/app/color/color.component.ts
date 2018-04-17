import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color : string;
  twoway: string;
  defaultColor : string;
  constructor() { }

  ngOnInit() {
    this.defaultColor = 'red';
    this.color=this.defaultColor;
    this.twoway="qulqchose";
  }

  changerColor(couleur){
    this.color=couleur;
  }

  makeDefaultColor(){
    this.color=this.defaultColor;
    this.twoway='new val';
  }

}
