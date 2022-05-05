import { Component, OnInit } from '@angular/core';
import { GroupeService } from '../../service/groupe.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Groupe } from '../../model/groupe';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  constructor(
    private groupeService : GroupeService,
    private token : TokenStorageService ) { }

  groupes? : Groupe[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    if (this.adminPermission ) {
      this.getGroupes() };
  }

  getGroupes() : void
  {
    this.groupeService.getGroupes().subscribe(
      (response : Groupe[]) => {
        this.groupes = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteGroupe(id : number): void{
    this.groupeService.deleteGroupe(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getGroupes();
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
