import { Component, OnInit, Input } from '@angular/core';
import { Groupe } from '../../model/groupe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { GroupeService } from '../../service/groupe.service';

@Component({
  selector: 'app-groupe-detail',
  templateUrl: './groupe-detail.component.html',
  styleUrls: ['./groupe-detail.component.css']
})
export class GroupeDetailComponent implements OnInit {

  @Input() groupe? : Groupe
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private groupeService : GroupeService,
    private formBuilder : FormBuilder
  ) { }

  equipeForm = this.formBuilder.group(
    {
      id : this.groupe?.id,
      nom : this.groupe?.nom,
    }
  ) ;
  ngOnInit(): void {
    this.getGroupe();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getGroupe() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupeService.getGroupe(id).subscribe(groupe => this.groupe = groupe);
  }

  addGroupe(nom :string) : void
  {
    var nom=String(nom);
    let nGroupe: Groupe = new Groupe(nom);

    this.groupeService.addGroupe(nGroupe)
    .subscribe(() => this.goBack()) ;
  }



  saveGroupe(): void
  {
    if(this.groupe)
    {
      this.groupeService.updateGroupe(this.groupe).subscribe(
        () => this.goBack()
      );
    }
  }

}
