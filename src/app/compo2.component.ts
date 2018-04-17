import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-compo2',
  template: `
    <p id="p">
      ma variable est : {{test}}
    </p>
    <button (click)="incrementer()" class="btn btn-info">++</button>
  `,
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  nombre : number=0;
  @Input() test : string ;
  constructor() { }

  @Output() incrementEvent = new EventEmitter();


  ngOnInit() {
    this.test = "bonjour";
  }

  incrementer(){
    this.nombre++;
    this.incrementEvent.emit(
      {
        'nombre': this.nombre
      }
    );
  }

}
