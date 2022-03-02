import { ClockCardComponent } from './dashboard/clock-card/clock-card.component';
import { PersonalComponent } from './me/personal/personal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { ShiftState } from './store/shift.state';
import { LoginState } from './store/login.state';

import { SharedModule } from './shared/shared.module';
import { MainProfileComponent } from './me/main-profile/main-profile.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    PersonalComponent,
    MainDashboardComponent,
    ClockCardComponent,
    NavigationComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([LoginState, ShiftState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
