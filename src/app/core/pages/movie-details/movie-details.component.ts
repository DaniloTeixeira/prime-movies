import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../../components/trailer-dialog';
import { Movie } from '../../models/Movie';
import { WatchlistService } from '../../services/watchlist';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private readonly matDialog = inject(MatDialog);
  private readonly watchlistService = inject(WatchlistService);
  private readonly location = inject(Location);

  protected loading!: boolean;
  protected movie = this.location.getState() as Movie;
  private savedWatchlistMovies = this.watchlistService.getAllMovies();

  constructor() {
    // console.log('Storage List', this.savedWatchlistMovies);
    console.log(this.movie);
    this.loading = true;
  }

  onOpenTralerModal(trailerLink: string): void {
    this.matDialog.open(TrailerDialogComponent, {
      autoFocus: false,
      data: trailerLink,
    });
  }

  getMovieByKey(key: string): Movie {
    return this.watchlistService.getMovieByKey('prime-videos');
  }

  removeMovieByKey(key: string): void {
    this.watchlistService.removeItem(key);
  }

  addMovieToWatchList(movie: Movie): void {
    const storedMovie = this.getMovieByKey(movie.key);

    if (storedMovie) {
      this.removeMovieByKey(movie.key);
      return;
    }

    movie.onWatchlist = true;
    const movieString = JSON.stringify(movie);
    console.log(movieString);

    localStorage.setItem('prime-movies', movieString);
  }
}
