import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GroupeService } from '../../service/groupe.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Groupe } from '../../model/groupe';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit, AfterViewInit{

  constructor(
    private groupeService : GroupeService,
    private token : TokenStorageService ) { }

  groupes? : Groupe[] ;
  currentUser : any ;
  adminPermission : boolean = false ;
  dataSource!: MatTableDataSource<Groupe>;
  displayedColumns: string[] = ['id', 'nom','update','delete'];
  displayedColumnsData: string[] = ['id', 'nom','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.adminPermission = this.permissions();
    if (this.adminPermission ) {
      this.getGroupes() };
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getGroupes() : void
  {
    this.groupeService.getGroupes().subscribe(
      (response : Groupe[]) => {
        this.groupes = response ;
        this.dataSource = new MatTableDataSource(this.groupes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteGroupe(id : number): void{
    this.groupeService.deleteGroupe(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getGroupes();
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
