import { MainProfileComponent } from './profile/main-profile/main-profile.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'profile', component: MainProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
