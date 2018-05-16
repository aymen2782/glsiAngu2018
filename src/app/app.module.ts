import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { ColorComponent } from './color/color.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { StyleComponent } from './style/style.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';

//Mes services
import {TodoService} from "./todo.service";
import { TodolistComponent } from './todolist/todolist.component';
import {PersonneService} from "./personne.service";
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
    ColorComponent,
    CvCardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent,
    StyleComponent,
    HighlightDirective,
    RainbowDirective,
    TodolistComponent,
    FormulaireComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService,PersonneService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
