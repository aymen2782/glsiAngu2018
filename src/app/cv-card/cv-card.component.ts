import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  nom : string;
  prenom : string;
  constructor() { }

  ngOnInit() {
    this.nom  = "sellaouti";
    this.prenom  = "aymen";
  }

}
