import { Component, OnInit } from '@angular/core';
import { JouerService } from '../../service/jouer.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Jouer } from '../../model/jouer';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})


export class JouerComponent implements OnInit {

  constructor(
    private jouerService : JouerService,
    private token : TokenStorageService ) { }

  jouers? : Jouer[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getJouers() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getJouers() : void
  {
    this.jouerService.getJouers().subscribe(
      (response : Jouer[]) => {
        this.jouers = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteJouer(id : number): void{
    this.jouerService.deleteJouer(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getJouers();
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
