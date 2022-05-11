import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { TournoiService } from '../../service/tournoi.service';
import { Tournoi } from '../../model/tournoi';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tournoi-detail',
  templateUrl: './tournoi-detail.component.html',
  styleUrls: ['./tournoi-detail.component.css']
})
export class TournoiDetailComponent implements OnInit {
  @Input() tournoi? : Tournoi
  tournois? : Tournoi[]
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private formBuilder : FormBuilder,
    private tournoiService : TournoiService
  ) { }

  tournoiForm = this.formBuilder.group(
    {
      nom : this.tournoi?.nom,
      dateDebut : this.tournoi?.dateDebut,
      dateFin : this.tournoi?.dateFin
    }
  ) ;
  ngOnInit(): void {
    this.getTournoi();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getTournoi() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tournoiService.getTournoi(id).subscribe(tournoi => this.tournoi = tournoi);
  }

  addTournoi(

    nom : string
  ) : void
  {
    let nTournoi: Tournoi = new Tournoi(nom);
    this.tournoiService.addTorunoi(nTournoi)
    .subscribe(() => this.goBack()) ;
  }



  saveTournoi(): void
  {
    if(this.tournoi)
    {
      this.tournoiService.updateTournoi(this.tournoi).subscribe(
        () => this.goBack()
      );
    }
  }


}
