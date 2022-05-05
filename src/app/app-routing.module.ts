import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { EquipeDetailComponent } from './component/equipe-detail/equipe-detail.component';
import { GroupeDetailComponent } from './component/groupe-detail/groupe-detail.component';
import { TournoirComponent } from './component/tournoir/tournoir.component';
import { JouerComponent } from './component/jouer/jouer.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipe/detail', component: EquipeDetailComponent },
  { path: 'equipe/detail/:id', component: EquipeDetailComponent },
  { path: 'groupe/detail', component: GroupeDetailComponent },
  { path: 'groupe/detail/:id', component: GroupeDetailComponent },
  { path: 'tournoirs', component: TournoirComponent },
  { path: 'jouers', component: JouerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
