import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Match } from '../../model/match';
import { HttpErrorResponse } from '@angular/common/http';
import { Predict } from 'src/app/model/predict';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit, AfterViewInit{

  constructor(
    private matchService : MatchService,
    private token : TokenStorageService ) { }

  matchs? : Match[] ;
  currentUser : any ;
  adminPermission : boolean = false ;
  team_1_predict? : string ;
  team_2_predict? : string ;
  dataSource!: MatTableDataSource<Match>;
  displayedColumns: string[] = ['id', 'nomEquipe1','nomEquipe2','resultat','date','tournoi','stade','predict','update','delete'];
  displayedColumnsData: string[] = ['id', 'nomEquipe1','nomEquipe2','resultat','date','tournoi','stade','predict','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  public predict(team_1 : string , team_2 : string)
  {
      let nPredict = new Predict(team_1,team_2)
      this.matchService.predict(nPredict)
      .subscribe(
        (response: any) => {
          alert(team_1 + ":" + response[team_1] +"-" + response[team_2]+ ":" + team_2 ) 


          
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

}
