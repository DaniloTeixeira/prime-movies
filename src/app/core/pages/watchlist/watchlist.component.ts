import { Component, inject } from '@angular/core';
import { IMovie } from '../../models/Movie.interface';
import { WatchlistService } from '../../services/watchlist';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent {
  private readonly watchlistService = inject(WatchlistService);

  protected loading$ = this.watchlistService.loading$;
  protected storedMovies$ = this.watchlistService.movies$;

  removeFromWatchlist(movie: IMovie): void {
    this.watchlistService.deleteMovie(movie.key);
  }

  clearWatchlist(): void {
    this.watchlistService.clearWatchlist();
  }

  onGoBack(): void {
    history.back()
  }
}
