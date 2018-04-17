import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnes : Personne[];
  constructor() { }
  @Output() envoiPersonne = new EventEmitter();
  ngOnInit() {
  }

  getSentPersonne(event){
    console.log('je suis dans list',event);
    this.envoiPersonne.emit({
        personne : event.personne
    }
    )
  }

}
