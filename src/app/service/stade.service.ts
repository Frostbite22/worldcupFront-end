import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stade } from '../model/stade';

const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  constructor(
    private http : HttpClient
  ) { }

  getStades(): Observable<Stade[]> {
    return this.http.get<Stade[]>(API_URL +'/stade',httpOptions);
  }

  addStade(stade : Stade) : Observable<Stade>
  {
    return this.http.post<Stade>(API_URL+'/stade',stade);
  }

  getStade(id : number) : Observable<Stade>
  {
    return this.http.get<Stade>(API_URL+`/stade/${id}`,httpOptions) ;
  }

  public updateStade(stade : Stade) : Observable<Stade>
  {
    return this.http.put<Stade>(API_URL+'/stade',stade);
  }

  public deleteStade( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/stade/${id}`);
  }

}
