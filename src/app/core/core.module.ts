import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { InfinityStonesComponent } from './components/infinity-stones';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import { CoreRoutingModule } from './core-routing.module';
import { LandingPageComponent } from './pages/landing-page';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { NotFoundComponent } from './pages/not-found';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  MovieListComponent,
  LandingPageComponent,
  TrailerDialogComponent,
  InfinityStonesComponent,
];
@NgModule({
  declarations: [...COMPONENTS, MovieDetailsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}
