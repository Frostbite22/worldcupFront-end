import { Tournoir } from "./tournoir";
import { Stade } from "./stade";
import { Equipe } from "./equipe";

export interface Match
{
    id?: number;
    nomEquipe1? : string;
    nomEquipe2? : string;
    resultat? : string;
    date? : Date;
    tournoir?: Tournoir;
    stade?: Stade;
    equipe?: Equipe;
}
export class Match
{
  id?: number;
  nomEquipe1? : string;
  nomEquipe2? : string;
  resultat? : string;
  date? : Date;
  tournoir?: Tournoir;
  stade?: Stade;
  equipe?: Equipe;

    constructor(nomEquipe1: string,nomEquipe2: string, resultat: string, date: Date) {
        this.nomEquipe1 = nomEquipe1;
        this.nomEquipe2 = nomEquipe2;
        this.resultat = resultat;
        this.date = date;
      }

}
