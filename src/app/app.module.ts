import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '././app-routing.module';
import {HttpClientModule } from '@angular/common/http';
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
import { TournoirComponent } from './component/tournoir/tournoir.component';
import { JouerComponent } from './component/jouer/jouer.component';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { StadeComponent } from './component/stade/stade.component';
import { MatchComponent } from './component/match/match.component';
import { MatchDetailComponent } from './component/match-detail/match-detail.component';
import { StadeDetailComponent } from './component/stade-detail/stade-detail.component';
import { ArbitreDetailComponent } from './component/arbitre-detail/arbitre-detail.component';
import { TournoirDetailComponent } from './component/tournoir-detail/tournoir-detail.component';
import { JouerDetailComponent } from './component/jouer-detail/jouer-detail.component';

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
    TournoirComponent,
    JouerComponent,
    ArbitreComponent,
    StadeComponent,
    MatchComponent,
    MatchDetailComponent,
    StadeDetailComponent,
    ArbitreDetailComponent,
    TournoirDetailComponent,
    JouerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
