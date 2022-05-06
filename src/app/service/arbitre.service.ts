import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitre } from '../model/arbitre';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ArbitreService {

  constructor(
    private http : HttpClient
  ) { }

  getArbitres(): Observable<Arbitre[]> {
    return this.http.get<Arbitre[]>(API_URL +'/arbitre',httpOptions);
  }

  addArbitre(arbitre : Arbitre) : Observable<Arbitre>
  {
    return this.http.post<Arbitre>(API_URL+'/arbitre',arbitre);
  }

  getArbitre(id : number) : Observable<Arbitre>
  {
    return this.http.get<Arbitre>(API_URL+`/arbitre/${id}`,httpOptions) ;
  }

  public updateArbitre(arbitre : Arbitre) : Observable<Arbitre>
  {
    return this.http.put<Arbitre>(API_URL+'/arbitre',arbitre);
  }

  public deleteArbitre( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/arbitre/${id}`);
  }

}
