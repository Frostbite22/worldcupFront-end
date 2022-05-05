import { Component, OnInit } from '@angular/core';
import { TournoirService } from '../../service/tournoir.service';
import { TokenStorageService } from '../../service/token-storage.service';

import { Tournoir } from '../../model/tournoir';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-tournoir',
  templateUrl: './tournoir.component.html',
  styleUrls: ['./tournoir.component.css']
})


export class TournoirComponent implements OnInit {

  constructor(
    private tournoirService : TournoirService,
    private token : TokenStorageService ) { }

  tournoirs? : Tournoir[] ;
  currentUser : any ;
  adminPermission : boolean = false ;

  ngOnInit(): void {
    this.getTournoirs() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
  }

  getTournoirs() : void
  {
    this.tournoirService.getTournoirs().subscribe(
      (response : Tournoir[]) => {
        this.tournoirs = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteTournoir(id : number): void{
    this.tournoirService.deleteTournoir(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getTournoirs();
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
