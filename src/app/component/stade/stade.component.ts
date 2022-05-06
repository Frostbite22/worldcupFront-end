import { Component, OnInit } from '@angular/core';
import { StadeService } from '../../service/stade.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Stade } from '../../model/stade';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css']
})


export class StadeComponent implements OnInit {

  constructor(
    private stadeService : StadeService,
    private token : TokenStorageService ) { }

  stades? : Stade[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getStades() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getStades() : void
  {
    this.stadeService.getStades().subscribe(
      (response : Stade[]) => {
        this.stades = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteStade(id : number): void{
    this.stadeService.deleteStade(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getStades();
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
