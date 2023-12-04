import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../../components/trailer-dialog';
import { MOVIES } from '../../data/movies';
import { Movie } from '../../models/Movie';
import { WatchlistService } from '../../services/watchlist';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  private matDialog = inject(MatDialog);
  private watchlistService = inject(WatchlistService);

  protected movies = MOVIES;

  constructor() {
    console.log(this.movies);
  }

  onOpenTralerModal(trailerLink: string): void {
    this.matDialog.open(TrailerDialogComponent, {
      autoFocus: false,
      data: trailerLink
    });

  }

  addMovieToWatchList(movie: Movie): void {
    this.watchlistService.addMovie(movie.key, movie);
  }
}
