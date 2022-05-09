import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JouerService } from '../../service/jouer.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Jouer } from '../../model/jouer';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})


export class JouerComponent implements OnInit, AfterViewInit{

  constructor(
    private jouerService : JouerService,
    private token : TokenStorageService ) { }

  jouers? : Jouer[] ;
  currentUser : any ;
  adminPermission : boolean = false;
  dataSource!: MatTableDataSource<Jouer>;
  displayedColumns: string[] = ['id', 'age', 'poids','nom','numMaillot','poste', 'prenom', 'taille', 'equipe','update','delete'];
  displayedColumnsData: string[] = ['id', 'age', 'poids','nom','numMaillot','poste', 'prenom', 'taille', 'equipe','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getJouers() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getJouers() : void
  {
    this.jouerService.getJouers().subscribe(
      (response : Jouer[]) => {
        this.jouers = response;
        this.dataSource = new MatTableDataSource(this.jouers);
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

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
