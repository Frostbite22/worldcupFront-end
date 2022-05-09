import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ArbitreService } from '../../service/arbitre.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Arbitre } from '../../model/arbitre';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})


export class ArbitreComponent implements OnInit, AfterViewInit{

  constructor(
    private arbitreService : ArbitreService,
    private token : TokenStorageService ) { }

  arbitres? : Arbitre[] ;
  currentUser : any ;
  adminPermission : boolean = false ;
  dataSource!: MatTableDataSource<Arbitre>;
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'match','update','delete'];
  displayedColumnsData: string[] = ['id', 'nom', 'prenom', 'match','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getArbitres() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getArbitres() : void
  {
    this.arbitreService.getArbitres().subscribe(
      (response : Arbitre[]) => {
        this.arbitres = response;
        this.dataSource = new MatTableDataSource(this.arbitres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteArbitre(id : number): void{
    this.arbitreService.deleteArbitre(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getArbitres();
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
