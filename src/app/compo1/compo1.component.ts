import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  alignement : string;
  test : number;
  filsValue;
  constructor() {

  }

  ngOnInit() {
    this.alignement = "right";
    this.test=0;
    this.filsValue=0;
   /* setInterval(()=> {
      console.log('test');
      this.test++;
      console.log(this.test);
    },1000);*/
  }

  showMessage(message){
    console.log(message);
    this.alignement = message;
  }

  afficheCompteur(event){
    this.filsValue=event.nombre;
  }
}
