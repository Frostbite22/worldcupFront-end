import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '././app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { EquipeComponent } from './component/equipe/equipe.component';
import { GroupeComponent } from './component/groupe/groupe.component';
import { EquipeDetailComponent } from './component/equipe-detail/equipe-detail.component';
import { GroupeDetailComponent } from './component/groupe-detail/groupe-detail.component';
import { TournoiComponent } from './component/tournoi/tournoi.component';
import { JoueurComponent } from './component/joueur/joueur.component';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { StadeComponent } from './component/stade/stade.component';
import { MatchComponent } from './component/match/match.component';
import { MatchDetailComponent } from './component/match-detail/match-detail.component';
import { StadeDetailComponent } from './component/stade-detail/stade-detail.component';
import { ArbitreDetailComponent } from './component/arbitre-detail/arbitre-detail.component';
import { TournoiDetailComponent } from './component/tournoi-detail/tournoi-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { JoueurDetailComponent } from './component/joueur-detail/joueur-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EquipeComponent,
    GroupeComponent,
    EquipeDetailComponent,
    GroupeDetailComponent,
    TournoiComponent,
    JoueurComponent,
    ArbitreComponent,
    StadeComponent,
    MatchComponent,
    MatchDetailComponent,
    StadeDetailComponent,
    ArbitreDetailComponent,
    TournoiDetailComponent,
    JoueurDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
