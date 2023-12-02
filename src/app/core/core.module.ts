import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LandingPageComponent } from './components/landing-page';
import { NavComponent } from './components/nav/nav.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home';
import { NotFoundComponent } from './pages/not-found';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    LandingPageComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CoreModule {}
