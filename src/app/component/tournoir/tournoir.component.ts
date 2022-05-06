import { Component, OnInit, ViewChild } from '@angular/core';
import { TournoirService } from '../../service/tournoir.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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
  adminPermission : boolean = false ;dataSource!: MatTableDataSource<Tournoir>;
  displayedColumns: string[] = ['id', 'dateDebut', 'dateFin','nom','equipe', 'update', 'delete'];
  displayedColumnsData: string[] = ['id', 'dateDebut', 'dateFin','nom','equipe', 'update', 'delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getTournoirs() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTournoirs() : void
  {
    this.tournoirService.getTournoirs().subscribe(
      (response : Tournoir[]) => {
        this.tournoirs = response;
        this.dataSource = new MatTableDataSource(this.tournoirs);
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

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
