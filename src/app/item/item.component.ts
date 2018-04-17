import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne : Personne;
  constructor() { }
  @Output() envoiPersonne = new EventEmitter();

  envoyerPersonne(){
    this.envoiPersonne.emit(
      {
        personne : this.personne
      }
    );
  }
  ngOnInit() {
  }

}
