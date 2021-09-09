import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { Score } from "./score.config";

@Injectable({
  providedIn: 'root',
})

export class ScoreService {
  private scoreURL = "https://asteroid.pixeltraits.com/api-docs/scores#/scores/get_scores"
  constructor(private http: HttpClient) {}

  getScore(): Observable<Score> {
    return this.http.get<Score>(this.scoreURL);
    console.log('score')
  }

  showScore() {
    const score = this.getScore();
    if (score) {
      console.log(score)
      };
    }
}


