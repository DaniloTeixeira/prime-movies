import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, startWith, tap } from 'rxjs';
import { MOVIES } from '../../data/movies';
import { IMovie } from '../../models/Movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  private readonly router = inject(Router);
  private readonly destroy = inject(DestroyRef);

  protected readonly movies = MOVIES;
  protected readonly filterField = new FormControl('');

  protected loading!: boolean;
  protected searchingMovies = false;
  protected showNoMoviesFoundMessage = false;
  protected filteredMovies$!: Observable<IMovie[]>;

  constructor() {
    this.loading = true;
    this.setFilteredMovies();
  }

  goToMovieDetails(movie: IMovie): void {
    this.router.navigate(['/movies/details'], { state: movie });
  }

  private filterMovies(value: string): IMovie[] {
    const filterValue = value.toLowerCase();

    const filteredMovies = this.movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterValue) ||
        movie.releasedDate.toLowerCase().includes(filterValue)
    );

    if (!filteredMovies.length) {
      this.showNoMoviesFoundMessage = true;
    }

    return filteredMovies;
  }

  private setFilteredMovies(): void {
    this.filteredMovies$ = this.filterField.valueChanges.pipe(
      tap(() => (this.searchingMovies = true)),
      takeUntilDestroyed(this.destroy),
      startWith(''),
      debounceTime(500),
      map((value) => this.filterMovies(value as string)),
      tap(() => (this.searchingMovies = false))
    );
  }
}
