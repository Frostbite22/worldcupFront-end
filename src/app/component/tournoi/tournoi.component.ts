import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TournoiService } from '../../service/tournoi.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Tournoi } from '../../model/tournoi';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})

export class TournoiComponent implements OnInit, AfterViewInit{

  constructor(
    private tournoiService : TournoiService,
    private token : TokenStorageService ) { }

  tournois? : Tournoi[] ;
  currentUser : any ;
  adminPermission : boolean = false ;
  dataSource!: MatTableDataSource<Tournoi>;
  displayedColumns: string[] = ['id','nom', 'dateDebut', 'dateFin', 'update', 'delete'];
  displayedColumnsData: string[] = ['id','nom', 'dateDebut', 'dateFin', 'update', 'delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getTournois() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTournois() : void
  {
    this.tournoiService.getTournois().subscribe(
      (response : Tournoi[]) => {
        this.tournois = response;
        this.dataSource = new MatTableDataSource(this.tournois);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteTournoi(id : number): void{
    this.tournoiService.deleteTournoi(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getTournois();
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
