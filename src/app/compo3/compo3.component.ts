import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styles: [`
  p{
    color: red;
    background-color: yellow;
  }
  `]
})
export class Compo3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
