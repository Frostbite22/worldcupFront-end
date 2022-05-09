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
export class tournoiService {

  constructor(
    private http : HttpClient
  ) { }

  gettournois(): Observable<Tournoi[]> {
    return this.http.get<Tournoi[]>(API_URL +'/tournoi',httpOptions);
  }

  addTorunoir(tournoi : Tournoi) : Observable<Tournoi>
  {
    return this.http.post<Tournoi>(API_URL+'/tournoi',tournoi);
  }

  gettournoi(id : number) : Observable<Tournoi>
  {
    return this.http.get<Tournoi>(API_URL+`/tournoi/${id}`,httpOptions) ;
  }

  public updatetournoi(tournoi : Tournoi) : Observable<Tournoi>
  {
    return this.http.put<Tournoi>(API_URL+'/tournoi',tournoi);
  }

  public deletetournoi( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/tournoi/${id}`);
  }

}
