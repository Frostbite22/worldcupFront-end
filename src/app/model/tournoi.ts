
export interface Tournoi
{
  id? : number;
  date_debut? : Date;
  date_fin? : Date;
  nom? : string;
}
export class Tournoi
{
  id? : number;
  dateDebut? : Date;
  dateFin? : Date;
  nom? : string;


    constructor(dateDebut: Date, dateFin : Date, nom : string) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nom = nom;
      }

}
