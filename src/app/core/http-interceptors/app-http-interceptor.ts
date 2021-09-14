import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import {ScoreService} from "../../score/services/score.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import { ACCUEIL_URL } from "../../app.routes";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private scoreService: ScoreService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const score = this.scoreService.getScore()
    if (score !== null) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200/'
        },
      });
    }
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              console.log('erreur')
              this.router.navigateByUrl(`${ACCUEIL_URL.absolutePath}/${ACCUEIL_URL.relativePath}`);
            }
          }
        }
      )
    );
  }
}


