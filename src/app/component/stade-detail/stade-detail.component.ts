import { Component, OnInit, Input } from '@angular/core';
import { Stade } from '../../model/stade';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatchService } from '../../service/match.service';
import { StadeService } from '../../service/stade.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stade-detail',
  templateUrl: './stade-detail.component.html',
  styleUrls: ['./stade-detail.component.css']
})
export class StadeDetailComponent implements OnInit {
  @Input() stade? : Stade
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private matchService : MatchService,
    private formBuilder : FormBuilder,
    private stadeService : StadeService
  ) { }

  stadeForm = this.formBuilder.group(
    {
      nom : this.stade?.nom,
      localisation : this.stade?.localisation,
      image : this.stade?.image
    }
  ) ;
  ngOnInit(): void {
    this.getStade();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getStade() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stadeService.getStade(id).subscribe(stade => this.stade = stade);
  }

  addStade(nom: string,localisation: string,image: string) : void
  {
    let nStade: Stade = new Stade(nom,localisation,image);
    this.stadeService.addStade(nStade)
    .subscribe(() => this.goBack());
  }



  saveStade(): void
  {
    if(this.stade)
    {
      this.stadeService.updateStade(this.stade).subscribe(
        () => this.goBack()
      );
    }
  }

}
