import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../model/match';
import { Predict } from '../model/predict';

const API_URL = 'http://localhost:8090';
const API_URL_PREDICT = 'http://localhost:5000';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private http : HttpClient
  ) { }

  getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(API_URL +'/match',httpOptions);
  }

  addMatch(match : Match) : Observable<Match>
  {
    return this.http.post<Match>(API_URL+'/match',match);
  }

  getMatch(id : number) : Observable<Match>
  {
    return this.http.get<Match>(API_URL+`/match/${id}`,httpOptions) ;
  }

  public updateMatch(match : Match) : Observable<Match>
  {
    return this.http.put<Match>(API_URL+'/match',match);
  }

  public deleteMatch( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/match/${id}`);
  }

  public predict(predict : Predict): Observable<Predict>
  {

    return this.http.post<Predict>(API_URL_PREDICT+'/predict',predict);
  } 

}
