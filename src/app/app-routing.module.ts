import { SiteComponent } from './components/dashboard/site/site.component';
import { ProblemsComponent } from './components/dashboard/problems/problems.component';
import { ContestComponent } from './components/dashboard/contest/contest.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LenguageComponent } from './components/dashboard/lenguage/lenguage.component';
import { OptionsComponent } from './components/dashboard/options/options.component';
import { PageInitialComponent } from './components/dashboard/page-initial/page-initial.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'inicio', component: PageInitialComponent },
      { path: 'contest', component: ContestComponent },
      { path: 'language', component: LenguageComponent },
      { path: 'options', component: OptionsComponent },
      { path: 'problems', component: ProblemsComponent },
      { path: 'site', component: SiteComponent }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
