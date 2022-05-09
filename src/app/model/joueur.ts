import { Equipe } from "./equipe";

export interface Joueur
{
  id? : number;
  age? : number;
  poids? : string;
  nom? : string;
  numMaillot? : number;
  poste? : string;
  prenom? : string;
  taille? : number;
  equipe? : Equipe;
}
export class Joueur
{
  id? : number;
  age? : number;
  poids? : string;
  nom? : string;
  numMaillot? : number;
  poste? : string;
  prenom? : string;
  taille? : number;
  equipe? : Equipe;

    constructor(age: number,poids : string,nom: string, numMaillot: number, poste: string, prenom: string,
      taille : number) {
        this.age = age;
        this.poids = poids;
        this.nom = nom;
        this.numMaillot = numMaillot;
        this.poste = poste;
        this.prenom = prenom;
        this.taille = taille;
      }

}
