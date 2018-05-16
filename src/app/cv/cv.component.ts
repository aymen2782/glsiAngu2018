import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";
import {TodoService} from "../todo.service";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes : Personne [];
  constructor(private todoService:TodoService, private personneService:PersonneService) { }

  ngOnInit() {
    this.personnes = this.personneService.getPersonnes();
    this.todoService.logImHere();
  }

}
