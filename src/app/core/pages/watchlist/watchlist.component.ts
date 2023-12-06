import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../../models/Movie.interface';
import { WatchlistService } from '../../services/watchlist';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {
  private readonly router = inject(Router);
  private readonly watchlistService = inject(WatchlistService);

  protected storedMovies: IMovie[] = [];
  protected loading!: false;

  constructor() {
    this.storedMovies.push(this.watchlistService.getAllMovies());

    console.log('Watchlist', this.storedMovies);
  }

  goToMovieDetails(movie: IMovie): void {
    this.router.navigate(['/movies/details'], { state: movie });
  }

  removeFromWatchlist(movie: IMovie): void {
    console.log('Removed', movie);
  }
}
