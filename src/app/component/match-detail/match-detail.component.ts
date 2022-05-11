import { Component, OnInit, Input } from '@angular/core';
import { Stade } from '../../model/stade';
import { Tournoi } from '../../model/tournoi';
import { Equipe } from '../../model/equipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatchService } from '../../service/match.service';
import { StadeService } from '../../service/stade.service';
import { EquipeService } from '../../service/equipe.service';
import { TournoiService } from '../../service/tournoi.service';
import { Match } from '../../model/match';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  @Input() match? : Match
  tournois? : Tournoi[]
  stades? : Stade[]
  equipes? : Equipe[]
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private matchService : MatchService,
    private formBuilder : FormBuilder,
    private tournoiService : TournoiService,
    private stadeService : StadeService,
    private equipeService : EquipeService,
  ) { }

  matchForm = this.formBuilder.group(
    {
      nomEquipe1 : this.match?.nomEquipe1,
      nomEquipe2 : this.match?.nomEquipe2,
      resultat : this.match?.resultat,
      date : this.match?.date,
      tournoi : this.match?.tournoi,
      stade : this.match?.stade
    }
  ) ;
  ngOnInit(): void {
    this.getMatch();
    this.getTournois();
    this.getEquipes();
    this.getStades();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getMatch() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchService.getMatch(id).subscribe(match => this.match = match);
  }

  addMatch(resultat: string) : void
  {
    let nMatch: Match = new Match(resultat);
    this.matchService.addMatch(nMatch)
    .subscribe(() => this.goBack());
  }



  saveMatch(): void
  {
    if(this.match)
    {
      this.matchService.updateMatch(this.match).subscribe(
        () => this.goBack()
      );
    }
  }

  getTournois() : void
  {
    this.tournoiService.getTournois().subscribe(
      (response : Tournoi[]) => {
        this.tournois = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getStades() : void
  {
    this.stadeService.getStades().subscribe(
      (response : Stade[]) => {
        this.stades = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  getEquipes() : void
  {
    this.equipeService.getEquipes().subscribe(
      (response : Equipe[]) => {
        this.equipes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
