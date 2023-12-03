import { Component } from '@angular/core';
import { MOVIES } from '../../data/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  protected movies = MOVIES;

  constructor() {
    console.log(this.movies);
  }
}
