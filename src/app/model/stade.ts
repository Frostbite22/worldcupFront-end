export interface Stade
{
  id? : number;
  nom? : string;
  localisation? : string
}
export class Stade
{
  id? : number;
  nom? : string;
  localisation? : string;

    constructor(nom: string,localisation : string) {
        this.nom = nom;
        this.localisation = localisation;
      }

}
