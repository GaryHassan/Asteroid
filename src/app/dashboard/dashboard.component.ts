import { Component, OnInit } from '@angular/core';
import {ACCUEIL_URL, SCORE_URL} from "../app.routes";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public accueilUrl = ACCUEIL_URL;
  public scoreUrl = SCORE_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
