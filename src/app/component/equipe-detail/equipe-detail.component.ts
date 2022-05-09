import { Component, OnInit, Input } from '@angular/core';
import { Groupe } from '../../model/groupe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { EquipeService } from '../../service/equipe.service';
import { GroupeService } from '../../service/groupe.service';
import { Equipe } from '../../model/equipe';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-equipe-detail',
  templateUrl: './equipe-detail.component.html',
  styleUrls: ['./equipe-detail.component.css']
})
export class EquipeDetailComponent implements OnInit {

  @Input() equipe? : Equipe
  groupes? : Groupe[]
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private equipeService : EquipeService,
    private formBuilder : FormBuilder,
    private groupeService : GroupeService
  ) { }

  equipeForm = this.formBuilder.group(
    {
      nom : this.equipe?.nom,
      drapeau : this.equipe?.drapeau,
      groupe : this.equipe?.groupe
    }
  ) ;
  ngOnInit(): void {
    this.getEquipe();
    this.getGroupes();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getEquipe() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.equipeService.getEquipe(id).subscribe(equipe => this.equipe = equipe);
  }

  addEquipe(nom :string,drapeau :string) : void
  {
    let nEquipe: Equipe = new Equipe(nom,drapeau);
    this.equipeService.addEquipe(nEquipe)
    .subscribe(() => this.goBack());
  }



  saveEquipe(): void
  {
    if(this.equipe)
    {
      this.equipeService.updateEquipe(this.equipe).subscribe(
        () => this.goBack()
      );
    }
  }

  getGroupes() : void
  {
    this.groupeService.getGroupes().subscribe(
      (response : Groupe[]) => {
        this.groupes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
