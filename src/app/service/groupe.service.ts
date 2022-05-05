import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Groupe } from '../model/groupe';


const API_URL = 'http://localhost:8090';
const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(
    private http : HttpClient
  ) { }

  getGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(API_URL +'/groupe',httpOptions)
  }

  addGroupe(groupe : Groupe) : Observable<Groupe>
  {
    return this.http.post<Groupe>(API_URL+'/groupe',groupe);
  }

  getGroupe(id : number) : Observable<Groupe>
  {
    return this.http.get<Groupe>(API_URL+`/groupe/${id}`,httpOptions) ;
  }

  public updateGroupe(groupe : Groupe) : Observable<Groupe>
  {
    return this.http.put<Groupe>(API_URL+'/groupe',groupe);
  }

  public deleteGroupe( id : number) : Observable<void>
  {
    return this.http.delete<void>(API_URL+`/groupe/${id}`);
  }
}
