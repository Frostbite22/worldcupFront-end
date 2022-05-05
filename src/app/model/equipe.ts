import { Groupe } from "./groupe";

export interface Equipe
{
    id?: number;
    nom? : string;
    groupe? : Groupe;
}
export class Equipe
{
  id?: number;
  nom? : string;
  groupe? : Groupe;

    constructor(nom: string) {
        this.nom = nom;
      }

}
