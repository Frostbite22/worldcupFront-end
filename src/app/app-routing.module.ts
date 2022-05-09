import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { EquipeDetailComponent } from './component/equipe-detail/equipe-detail.component';
import { GroupeDetailComponent } from './component/groupe-detail/groupe-detail.component';
import { TournoiComponent } from './component/tournoi/tournoi.component';
import { JoueurComponent } from './component/joueur/joueur.component';
import { MatchComponent } from './component/match/match.component';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { StadeComponent } from './component/stade/stade.component';
import { StadeDetailComponent } from './component/stade-detail/stade-detail.component';
import { MatchDetailComponent } from './component/match-detail/match-detail.component';
import { TournoiDetailComponent } from './component/tournoi-detail/tournoi-detail.component';
import { ArbitreDetailComponent } from './component/arbitre-detail/arbitre-detail.component';
import { JoueurDetailComponent } from "./component/joueur-detail/joueur-detail.component";




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipe/detail', component: EquipeDetailComponent },
  { path: 'equipe/detail/:id', component: EquipeDetailComponent },
  { path: 'groupe/detail', component: GroupeDetailComponent },
  { path: 'groupe/detail/:id', component: GroupeDetailComponent },
  { path: 'stade/detail', component: StadeDetailComponent },
  { path: 'stade/detail/:id', component: StadeDetailComponent },
  { path: 'match/detail', component: MatchDetailComponent },
  { path: 'match/detail/:id', component: MatchDetailComponent },
  { path: 'tournoi/detail', component: TournoiDetailComponent },
  { path: 'tournoi/detail/:id', component: TournoiDetailComponent },
  { path: 'arbitre/detail', component: ArbitreDetailComponent },
  { path: 'arbitre/detail/:id', component: ArbitreDetailComponent },
  { path: 'joueur/detail', component: JoueurDetailComponent },
  { path: 'joueur/detail/:id', component: JoueurDetailComponent },
  { path: 'tournois', component: TournoiComponent },
  { path: 'joueurs', component: JoueurComponent },
  { path: 'arbitres', component: ArbitreComponent },
  { path: 'matchs', component: MatchComponent },
  { path: 'stades', component: StadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
