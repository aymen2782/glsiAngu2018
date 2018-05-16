import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnes : Personne[];
  constructor(private personneService: PersonneService) { }

  ngOnInit() {
  }

  selectPersonne(personne : Personne){
    console.log('cc');
    this.personneService.setSelectedPersonne(personne);
  }

}
