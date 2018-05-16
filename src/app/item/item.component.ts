import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne : Personne;
  constructor(private personneService: PersonneService) { }
  @Output() envoiPersonne = new EventEmitter();

  envoyerPersonne(){
    this.personneService.selectedPersonne.emit(
        this.personne
    );
  }
  ngOnInit() {
  }

}
