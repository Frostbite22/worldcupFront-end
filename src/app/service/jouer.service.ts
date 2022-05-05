import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jouer } from '../model/jouer';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JouerService {

  constructor(
    private http : HttpClient
  ) { }

  getJouers(): Observable<Jouer[]> {
    return this.http.get<Jouer[]>(API_URL +'/jouer',httpOptions);
  }

  addJouer(jouer : Jouer) : Observable<Jouer>
  {
    return this.http.post<Jouer>(API_URL+'/jouer',jouer);
  }

  getJouer(id : number) : Observable<Jouer>
  {
    return this.http.get<Jouer>(API_URL+`/jouer/${id}`,httpOptions) ;
  }

  public updateJouer(jouer : Jouer) : Observable<Jouer>
  {
    return this.http.put<Jouer>(API_URL+'/jouer',jouer);
  }

  public deleteJouer( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/jouer/${id}`);
  }

}
