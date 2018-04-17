import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes : Personne [];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne('sellaouti','aymen',35, 'as.jpg'),
      new Personne('sellaouti2','aymen2',25, 'as.jpg'),
    ];
  }

}
