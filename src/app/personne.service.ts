import {EventEmitter, Injectable} from '@angular/core';
import {Personne} from "./Model/Personne";

@Injectable()
export class PersonneService {

  private personnes : Personne[];
  selectedPersonne = new EventEmitter<Personne>() ;
  constructor() {
    this.personnes=[
        new Personne('sellaouti','aymen',35, 'as.jpg'),
        new Personne('sellaouti2','aymen2',25, 'as.jpg'),
    ];
  }

  setSelectedPersonne(personne : Personne){
    //this.selectedPersonne=personne;
  }

  getPersonnes(){
    return this.personnes;
  }

}
