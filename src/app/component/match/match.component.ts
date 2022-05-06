import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Match } from '../../model/match';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(
    private matchService : MatchService,
    private token : TokenStorageService ) { }

  matchs? : Match[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getMatchs() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getMatchs() : void
  {
    this.matchService.getMatchs().subscribe(
      (response : Match[]) => {
        this.matchs = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteMatch(id : number): void{
    this.matchService.deleteMatch(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getMatchs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public permissions(): boolean
  {
    return this.currentUser.roles.includes("ROLE_ADMIN");
  }



}
