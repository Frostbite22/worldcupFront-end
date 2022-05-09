import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joueur } from '../model/joueur';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(
    private http : HttpClient
  ) { }

  getJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(API_URL +'/joueur',httpOptions);
  }

  addJoueur(joueur : Joueur) : Observable<Joueur>
  {
    return this.http.post<Joueur>(API_URL+'/joueur',joueur);
  }

  getJoueur(id : number) : Observable<Joueur>
  {
    return this.http.get<Joueur>(API_URL+`/joueur/${id}`,httpOptions) ;
  }

  public updateJoueur(joueur : Joueur) : Observable<Joueur>
  {
    return this.http.put<Joueur>(API_URL+'/joueur',joueur);
  }

  public deleteJoueur( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/joueur/${id}`);
  }

}
