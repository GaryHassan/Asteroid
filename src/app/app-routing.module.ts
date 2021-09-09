import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ACCUEIL_URL, ASTEROID_URL, SCORE_URL} from "./app.routes";
import { ScoreComponent } from "./score/score.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AsteroidComponent } from "./asteroid/asteroid.component";

const routes: Routes = [
  {
    path: ACCUEIL_URL.relativePath,
    component: DashboardComponent,
  },
  {
    path: SCORE_URL.relativePath,
    component: ScoreComponent,
  },
  {
    path: ASTEROID_URL.relativePath,
    component: AsteroidComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
