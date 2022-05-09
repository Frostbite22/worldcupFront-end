import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StadeService } from '../../service/stade.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Stade } from '../../model/stade';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css']
})

export class StadeComponent implements OnInit, AfterViewInit{

  constructor(
    private stadeService : StadeService,
    private token : TokenStorageService ) { }

  stades? : Stade[] ;
  currentUser : any ;
  adminPermission : boolean = false;
  dataSource!: MatTableDataSource<Stade>;
  displayedColumns: string[] = ['id', 'nom','localisation','image', 'update','delete'];
  displayedColumnsData: string[] = ['id', 'nom','localisation','image', 'update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getStades() ;
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getStades() : void
  {
    this.stadeService.getStades().subscribe(
      (response : Stade[]) => {
        this.stades = response ;
        this.dataSource = new MatTableDataSource(this.stades);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteStade(id : number): void{
    this.stadeService.deleteStade(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getStades();
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
