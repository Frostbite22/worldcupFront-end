export interface Stade
{
  id? : number;
  nom? : string;
  localisation? : string;
  image? : string;
}
export class Stade
{
  id? : number;
  nom? : string;
  localisation? : string;
  image? : string;

    constructor(nom: string, localisation : string, image: string) {
        this.nom = nom;
        this.localisation = localisation;
        this.image = image;
      }

}
