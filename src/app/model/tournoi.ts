
export interface Tournoi
{
  id? : number;
  dateDebut? : Date;
  dateFin? : Date;
  nom? : string;
}
export class Tournoi
{
  id? : number;
  dateDebut? : Date;
  dateFin? : Date;
  nom? : string;


    constructor(nom : string) {
        this.nom = nom;
      }

}
