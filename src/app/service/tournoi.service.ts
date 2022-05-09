import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournoi } from '../model/tournoi';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  constructor(
    private http : HttpClient
  ) { }

  getTournois(): Observable<Tournoi[]> {
    return this.http.get<Tournoi[]>(API_URL +'/tournoi',httpOptions);
  }

  addTorunoi(tournoi : Tournoi) : Observable<Tournoi>
  {
    return this.http.post<Tournoi>(API_URL+'/tournoi',tournoi);
  }

  getTournoi(id : number) : Observable<Tournoi>
  {
    return this.http.get<Tournoi>(API_URL+`/tournoi/${id}`,httpOptions) ;
  }

  public updateTournoi(tournoi : Tournoi) : Observable<Tournoi>
  {
    return this.http.put<Tournoi>(API_URL+'/tournoi',tournoi);
  }

  public deleteTournoi( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/tournoi/${id}`);
  }

}
