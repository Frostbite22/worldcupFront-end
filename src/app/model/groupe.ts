export interface Groupe
{
  id?: number;
  numero : number;
}
export class Groupe
{
  id?: number;
  numero: number;

  constructor(numero: number) {
    this.numero = numero;

  }
}
