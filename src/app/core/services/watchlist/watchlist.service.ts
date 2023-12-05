import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private primeMovies = 'prime-movies';

  addMovie(key: string, value: Movie): void {
    const data = this.getData();

    data[key] = value;
    this.setData(data);
  }

  getMovieByKey(key: string): Movie {
    const data = this.getData();
    console.log('AQUI', data[key]);
    return data[key];
  }
  // updateMovie(key: string, value: any): void {
  //   const data = this.getData();

  //   if (data.hasOwnProperty(key)) {
  //     data[key] = value;
  //     this.setData(data);
  //   }
  // }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearWatchlist(): void {
    localStorage.removeItem(this.primeMovies);
  }

  getAllMovies(): Movie[] {
    return this.getData();
  }

  private getData() {
    const dataString = localStorage.getItem(this.primeMovies);

    return dataString ? JSON.parse(dataString) : [];
  }

  private setData(movie: Movie): void {
    localStorage.setItem(this.primeMovies, JSON.stringify(movie));
  }
}
