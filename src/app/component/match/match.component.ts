import { Component, OnInit, ViewChild } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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
  dataSource!: MatTableDataSource<Match>;
  displayedColumns: string[] = ['id', 'nomEquipe1','nomEquipe2','resultat','date','tournoir','stade','equipe','update','delete'];
  displayedColumnsData: string[] = ['id', 'nomEquipe1','nomEquipe2','resultat','date','tournoir','stade','equipe','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getMatchs() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getMatchs() : void
  {
    this.matchService.getMatchs().subscribe(
      (response : Match[]) => {
        this.matchs = response ;
        this.dataSource = new MatTableDataSource(this.matchs);
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

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
