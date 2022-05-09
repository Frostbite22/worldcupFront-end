export interface Groupe
{
  id?: number;
  nom : string;
}
export class Groupe
{
  id?: number;
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }
}
