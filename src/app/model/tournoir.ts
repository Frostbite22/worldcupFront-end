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
  dateDebut? : Date;
  dateFin? : Date;
  nom? : string;
  equipe? : Equipe;


    constructor(dateDebut: Date,dateFin : Date,
      nom : string) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nom = nom;
      }

}
