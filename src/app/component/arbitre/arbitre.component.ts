import { Component, OnInit } from '@angular/core';
import { ArbitreService } from '../../service/arbitre.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Arbitre } from '../../model/arbitre';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})


export class ArbitreComponent implements OnInit {

  constructor(
    private arbitreService : ArbitreService,
    private token : TokenStorageService ) { }

  arbitres? : Arbitre[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getArbitres() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getArbitres() : void
  {
    this.arbitreService.getArbitres().subscribe(
      (response : Arbitre[]) => {
        this.arbitres = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteArbitre(id : number): void{
    this.arbitreService.deleteArbitre(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getArbitres();
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
