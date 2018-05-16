import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedPersonne : Personne = null;
  constructor(public personneService:PersonneService) {
  }

  ngOnInit() {
    this.personneService.selectedPersonne.subscribe(
      (personne:Personne)=>{
        this.selectedPersonne=personne
      }
    )
  }

}
