import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { Score, SCORE_URL_API } from "./score.config";

@Injectable({
  providedIn: 'root',
})

export class ScoreService {
  constructor(private readonly httpClient: HttpClient) {}

  public getScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(`${SCORE_URL_API.score}`)
  }
}
