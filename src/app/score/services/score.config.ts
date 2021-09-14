import {environment} from "../../../environments/environment";

export const SCORE_URL_API = {
  score: `${environment.score}/scores`,
};

export interface Score {
  pseudo: string;
  asteroid: string;
  time: string;
}
