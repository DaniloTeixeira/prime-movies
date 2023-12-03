import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { InfinityStonesComponent } from './components/infinity-stones';
import { CoreRoutingModule } from './core-routing.module';
import { LandingPageComponent } from './pages/landing-page';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { NotFoundComponent } from './pages/not-found';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  MovieListComponent,
  LandingPageComponent,
  InfinityStonesComponent,
];
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [...COMPONENTS]
})
export class CoreModule {}
