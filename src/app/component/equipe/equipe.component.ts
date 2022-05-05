import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../service/equipe.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Equipe } from '../../model/equipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor(
    private equipeService : EquipeService,
    private token : TokenStorageService ) { }

  equipes? : Equipe[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getEquipes() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getEquipes() : void
  {
    this.equipeService.getEquipes().subscribe(
      (response : Equipe[]) => {
        this.equipes = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteEquipe(id : number): void{
    this.equipeService.deleteEquipe(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getEquipes();
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
