import { Equipe } from "./equipe";

export interface Tournoir
{
  id? : number;
  date_debut? : Date;
  date_fin? : Date;
  nom? : string;
  equipe? : Equipe;
}
export class Tournoir
{
  id? : number;
  date_debut? : Date;
  date_fin? : Date;
  nom? : string;
  equipe? : Equipe;


    constructor(date_debut: Date,date_fin : Date,
      nom : string) {
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.nom = nom;
      }

}
