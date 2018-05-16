import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) { }

  ngOnInit() {
  }

  getPosts(){
    this.http.get(this.url).subscribe(
      (response)=>{
        console.log(response.json())
      }
    )
  }

}
