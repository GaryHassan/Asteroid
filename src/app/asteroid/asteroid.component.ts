import { Component, OnInit } from '@angular/core';
import {ACCUEIL_URL} from "../app.routes";

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent implements OnInit {
  public accueilUrl = ACCUEIL_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
