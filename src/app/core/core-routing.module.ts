import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page';
import { MovieDetailsComponent } from './pages/movie-details';
import { MovieListComponent } from './pages/movie-list';
import { WatchlistComponent } from './pages/watchlist';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'list',
    component: MovieListComponent,
  },
  {
    path: 'details',
    component: MovieDetailsComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
