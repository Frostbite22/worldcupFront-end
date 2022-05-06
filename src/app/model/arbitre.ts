import { Match } from "./match";

export interface Arbitre
{
  id? : number;
  nom? : string;
  prenom? : string;
  filiere? : string;
  niveau? : string;
  match? : Match;
}
export class Arbitre
{
  id? : number;
  nom? : string;
  prenom? : string;
  filiere? : string;
  niveau? : string;
  match? : Match;

    constructor(nom: string,prenom : string, filiere: string,niveau: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.niveau = niveau;
        this.filiere = filiere;
        this.niveau = niveau;
      }

}
