import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContestComponent } from './components/dashboard/contest/contest.component';
import { LenguageComponent } from './components/dashboard/lenguage/lenguage.component';
import { OptionsComponent } from './components/dashboard/options/options.component';
import { ProblemsComponent } from './components/dashboard/problems/problems.component';
import { SiteComponent } from './components/dashboard/site/site.component';
import { PageInitialComponent } from './components/dashboard/page-initial/page-initial.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ContestComponent,
    LenguageComponent,
    OptionsComponent,
    ProblemsComponent,
    SiteComponent,
    PageInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
 }
