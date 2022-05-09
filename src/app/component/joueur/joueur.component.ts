import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JoueurService } from '../../service/joueur.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Joueur } from '../../model/joueur';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})


export class JoueurComponent implements OnInit, AfterViewInit{

  constructor(
    private joueurService : JoueurService,
    private token : TokenStorageService ) { }

  joueurs? : Joueur[] ;
  currentUser : any ;
  adminPermission : boolean = false;
  dataSource!: MatTableDataSource<Joueur>;
  displayedColumns: string[] = ['id', 'age', 'poids','nom','numMaillot','poste', 'prenom', 'taille', 'equipe','update','delete'];
  displayedColumnsData: string[] = ['id', 'age', 'poids','nom','numMaillot','poste', 'prenom', 'taille', 'equipe','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getJoueurs() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getJoueurs() : void
  {
    this.joueurService.getJoueurs().subscribe(
      (response : Joueur[]) => {
        this.joueurs = response;
        this.dataSource = new MatTableDataSource(this.joueurs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteJoueur(id : number): void{
    this.joueurService.deleteJoueur(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getJoueurs();
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
