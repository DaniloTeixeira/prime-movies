import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../../models/Movie.interface';
import { NotificationService } from '../notification';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private readonly notification = inject(NotificationService);

  private readonly moviesSubject$ = new BehaviorSubject<IMovie[]>([]);
  public readonly movies$ = this.moviesSubject$.asObservable();

  private readonly isLoading$ = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.isLoading$.asObservable();

  constructor() {
    this.loadMoviesFromStorage();
  }

  addMovie(movie: IMovie): void {
    movie.onWatchlist = true;
    const info = 'Movie added to your watchlist';
    const currentMovies = this.moviesSubject$.value;
    const updatedMovies = [...currentMovies, movie];
    this.saveMoviesToStorage(updatedMovies, info);
  }

  deleteMovie(movieKey: string): void {
    const info = 'Movie deleted from you watchlist';
    const currentMovies = this.moviesSubject$.value;
    const updatedMovies = currentMovies.filter((movie) => {
      if (movie.key !== movieKey) {
        movie.onWatchlist = false;
      }

      movie.key !== movieKey;
    });

    this.saveMoviesToStorage(updatedMovies, info);
  }

  clearWatchlist(): void {
    this.isLoading$.next(true);

    setTimeout(() => {
      localStorage.removeItem('movies');
      this.loadMoviesFromStorage();
      this.isLoading$.next(false);
    }, 1500);
  }

  private loadMoviesFromStorage(): void {
    const storedMovies = localStorage.getItem('movies');
    const parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
    this.moviesSubject$.next(parsedMovies);
  }

  private saveMoviesToStorage(movies: IMovie[], notification: string): void {
    this.isLoading$.next(true);

    setTimeout(() => {
      localStorage.setItem('movies', JSON.stringify(movies));
      this.moviesSubject$.next(movies);
      this.isLoading$.next(false);
      this.notification.info(notification);
    }, 1500);
  }
}
