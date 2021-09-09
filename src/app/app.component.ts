import { Component } from '@angular/core';
import {ACCUEIL_URL, ASTEROID_URL, SCORE_URL} from "./app.routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public accueilUrl = ACCUEIL_URL;
  public scoreUrl = SCORE_URL;
  public asteroidUrl = ASTEROID_URL;
}
