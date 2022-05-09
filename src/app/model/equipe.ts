import { Groupe } from "./groupe";

export interface Equipe
{
    id?: number;
    nom? : string;
    drapeau? : string;
    groupe? : Groupe;
}
export class Equipe
{
  id?: number;
  nom? : string;
  drapeau? : string;
  groupe? : Groupe;

    constructor(nom: string, drapeau: string) {
        this.nom = nom;
        this.drapeau = drapeau;
      }

}
