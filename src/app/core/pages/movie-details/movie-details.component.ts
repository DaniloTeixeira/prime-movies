import { Location } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../../components/trailer-dialog';
import { IMovie } from '../../models/Movie.interface';
import { WatchlistService } from '../../services/watchlist';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  private readonly location = inject(Location);
  private readonly matDialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly watchlistService = inject(WatchlistService);

  protected loading!: boolean;
  protected isOnWatchlist!: boolean;
  protected movie = this.location.getState() as IMovie;
  protected storedMovies$ = this.watchlistService.movies$;
  protected savingOrDeletingInProgress$ = this.watchlistService.loading$;

  constructor() {
    this.loading = true;
    this.setIsOnWatchlist();
  }

  onOpenTralerModal(trailerLink: string): void {
    this.matDialog.open(TrailerDialogComponent, {
      autoFocus: false,
      data: trailerLink,
    });
  }

  onHandleWatchlist(movie: IMovie): void {
    if (this.isOnWatchlist) {
      this.removeFromWatchlist(movie);
      return;
    }

    this.addMovieToWatchList(movie);
  }

  private addMovieToWatchList(movie: IMovie): void {
    this.watchlistService.addMovie(movie);
  }

  private removeFromWatchlist(movie: IMovie): void {
    this.watchlistService.deleteMovie(movie.key);
  }

  private setIsOnWatchlist(): void {
    this.storedMovies$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((movies) => {
        this.isOnWatchlist = movies.some(
          (movie) => movie.key === this.movie.key
        );
      });
  }
}
