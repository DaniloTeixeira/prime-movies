import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page';
import { MovieListComponent } from './pages/movie-list';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: ' list',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
