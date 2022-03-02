import { MainProfileComponent } from './me/main-profile/main-profile.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { PersonalComponent } from './me/personal/personal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'profile', component: MainProfileComponent },
  { path: 'personal', component: PersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
