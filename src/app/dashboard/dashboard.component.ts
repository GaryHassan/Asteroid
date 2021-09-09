import { Component, OnInit } from '@angular/core';
import { ACCUEIL_URL, SCORE_URL } from "../app.routes";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pseudo = new FormControl('');
  asteroid = new FormControl('');
  time = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
