import { Component, OnInit } from '@angular/core';
import { ScoreService } from "./services/score.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private readonly scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.getScore()

    console.log('ton pere')
  }

}
