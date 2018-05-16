import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  show : boolean;
  color : string;
  size : string;
  myFont : string;

  constructor() { }

  ngOnInit() {
    this.color="red";
    this.size="24px";
    this.myFont="verdana";
    this.show = true;
  }

  changeTaille(taille){
    this.size = taille+'px';
  }

  changeFont(myselect){
    console.log(Math.random());
    console.log(myselect.value);
  }

  affiche(){
    this.show = ! this.show;
  }

}
