import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../model/match';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ArbitreService } from '../../service/arbitre.service';
import { MatchService } from '../../service/match.service';
import { Arbitre } from '../../model/arbitre';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-arbitre-detail',
  templateUrl: './arbitre-detail.component.html',
  styleUrls: ['./arbitre-detail.component.css']
})
export class ArbitreDetailComponent implements OnInit {

  @Input() arbitre? : Arbitre
  matchs? : Match[]
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private arbitreService : ArbitreService,
    private formBuilder : FormBuilder,
    private matchService : MatchService
  ) { }

  arbitreForm = this.formBuilder.group(
    {
      nom : this.arbitre?.nom,
      prenom : this.arbitre?.prenom,
      match : this.arbitre?.match
    }
  ) ;
  ngOnInit(): void {
    this.getArbitre();
    this.getMatchs();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getArbitre() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.arbitreService.getArbitre(id).subscribe(arbitre => this.arbitre = arbitre);
  }

  addArbitre(nom :string,prenom :string) : void
  {
    let nArbitre: Arbitre = new Arbitre(nom,prenom);
    this.arbitreService.addArbitre(nArbitre)
    .subscribe(() => this.goBack());
  }



  saveArbitre(): void
  {
    if(this.arbitre)
    {
      this.arbitreService.updateArbitre(this.arbitre).subscribe(
        () => this.goBack()
      );
    }
  }

  getMatchs() : void
  {
    this.matchService.getMatchs().subscribe(
      (response : Match[]) => {
        this.matchs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
