import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournoir } from '../model/tournoir';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TournoirService {

  constructor(
    private http : HttpClient
  ) { }

  getTournoirs(): Observable<Tournoir[]> {
    return this.http.get<Tournoir[]>(API_URL +'/tournoir',httpOptions);
  }

  addTorunoir(tournoir : Tournoir) : Observable<Tournoir>
  {
    return this.http.post<Tournoir>(API_URL+'/tournoir',tournoir);
  }

  getTournoir(id : number) : Observable<Tournoir>
  {
    return this.http.get<Tournoir>(API_URL+`/tournoir/${id}`,httpOptions) ;
  }

  public updateTournoir(tournoir : Tournoir) : Observable<Tournoir>
  {
    return this.http.put<Tournoir>(API_URL+'/tournoir',tournoir);
  }

  public deleteTournoir( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/tournoir/${id}`);
  }

}
