import { Equipe } from "./equipe";

export interface Jouer
{
  id? : number;
  age? : number;
  filiere? : string;
  niveau? : number;
  nom? : string;
  numMaillot? : number;
  poste? : string;
  prenom? : string;
  taille? : number;
  equipe? : Equipe;
}
export class Jouer
{
  id? : number;
  age? : number;
  filiere? : string;
  niveau? : number;
  nom? : string;
  num_maillot? : number;
  poste? : string;
  prenom? : string;
  taille? : number;
  equipe? : Equipe;

    constructor(age: number,filiere : string, niveau: number,nom: string, numMaillot: number, poste: string, prenom: string,
      taille : number) {
        this.age = age;
        this.filiere = filiere;
        this.niveau = niveau;
        this.nom = nom;
        this.numMaillot = numMaillot;
        this.poste = poste;
        this.prenom = prenom;
        this.taille = taille;
      }

}
