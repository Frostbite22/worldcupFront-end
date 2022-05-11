import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from '../../model/equipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { JoueurService } from '../../service/joueur.service';
import { EquipeService } from '../../service/equipe.service';
import { Joueur } from '../../model/joueur';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-joueur-detail',
  templateUrl: './joueur-detail.component.html',
  styleUrls: ['./joueur-detail.component.css']
})
export class JoueurDetailComponent implements OnInit {

  @Input() joueur? : Joueur
  equipes? : Equipe[]
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private joueurService : JoueurService,
    private formBuilder : FormBuilder,
    private equipeService : EquipeService
  ) { }

  joueurForm = this.formBuilder.group(
    {
      nom : this.joueur?.nom,
      age : this.joueur?.age,
      poids : this.joueur?.poids,
      numMaillot : this.joueur?.numMaillot,
      poste : this.joueur?.poste,
      prenom : this.joueur?.prenom,
      taille : this.joueur?.taille,
      equipe : this.joueur?.equipe,
    }
  ) ;
  ngOnInit(): void {
    this.getJoueur();
    this.getEquipes();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getJoueur() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.joueurService.getJoueur(id).subscribe(joueur => this.joueur = joueur);
  }

  addJoueur(age: string,poids : string,nom: string, numMaillot: string, poste: string, prenom: string,
    taille : string) : void
  {

    let nJoueur: Joueur = new Joueur(Number(age),poids,nom,Number(numMaillot),poste,prenom,Number(taille));
    this.joueurService.addJoueur(nJoueur)
    .subscribe(() => this.goBack());
  }



  saveJoueur(): void
  {
    if(this.joueur)
    {
      this.joueurService.updateJoueur(this.joueur).subscribe(
        () => this.goBack()
      );
    }
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
