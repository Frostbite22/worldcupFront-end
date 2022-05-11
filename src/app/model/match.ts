import { Tournoi } from "./tournoi";
import { Stade } from "./stade";
import { Equipe } from "./equipe";

export interface Match
{
    id?: number;
    nomEquipe1? : Equipe;
    nomEquipe2? : Equipe;
    resultat? : string;
    date? : Date;
    tournoi?: Tournoi;
    stade?: Stade;
}
export class Match
{
  id?: number;
  nomEquipe1? : Equipe;
  nomEquipe2? : Equipe;
  resultat? : string;
  date? : Date;
  tournoi?: Tournoi;
  stade?: Stade;

    constructor(resultat: string) {
        this.resultat = resultat;
      }

}
