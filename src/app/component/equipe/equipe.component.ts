import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EquipeService } from '../../service/equipe.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Equipe } from '../../model/equipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit, AfterViewInit{

  constructor(
    private equipeService : EquipeService,
    private token : TokenStorageService ) { }

  equipes? : Equipe[] ;
  currentUser : any ;
  adminPermission : boolean = false ;
  dataSource!: MatTableDataSource<Equipe>;
  displayedColumns: string[] = ['id', 'nom', 'drapeau', 'groupe','update','delete'];
  displayedColumnsData: string[] = ['id', 'nom', 'drapeau', 'groupe','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getEquipes() ;
    this.currentUser = this.token.getUser();
  //  this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getEquipes() : void
  {
    this.equipeService.getEquipes().subscribe(
      (response : Equipe[]) => {
        this.equipes = response ;
        this.dataSource = new MatTableDataSource(this.equipes);
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

  /*public permissions(): boolean
  {
    return this.currentUser.roles.includes("ROLE_ADMIN");
  }*/

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
