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
  private scoreURL = "https://asteroid.pixeltraits.com/api-docs/scores";
  private reqheaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

  })
  constructor(private readonly httpClient: HttpClient) {}

  getScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(this.scoreURL, { headers: this.reqheaders })
    console.log('teub')
  }
}
