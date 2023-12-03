import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private primeMovieKey = 'prime-movie-key';

  addMovie(key: string, value: Movie): void {
    const data = this.getData();
    data[key] = value;
    this.setData(data);
  }

  getMovieByKey(key: string): Movie {
    const data = this.getData();

    return data[key];
  }
  updateMovie(key: string, value: any): void {
    const data = this.getData();

    if (data.hasOwnProperty(key)) {
      data[key] = value;
      this.setData(data);
    }
  }

  deleteMovie(key: string): void {
    const data = this.getData();

    if (data.hasOwnProperty(key)) {
      delete data[key];
      this.setData(data);
    }
  }

  clearWatchlist(): void {
    localStorage.removeItem(this.primeMovieKey);
  }

  getAllMovies(): Movie[] {
    return this.getData();
  }

  private getData() {
    const dataString = localStorage.getItem(this.primeMovieKey);
    return dataString ? JSON.parse(dataString) : {};
  }

  private setData(movie: Movie): void {
    localStorage.setItem(this.primeMovieKey, JSON.stringify(movie));
  }
}
