import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, startWith, tap } from 'rxjs';
import { MOVIES } from '../../data/movies';
import { Movie } from '../../models/Movie';

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
  protected filteredMovies$!: Observable<Movie[]>;

  constructor() {
    this.loading = true;
    this.setFilteredMovies();
  }

  goToMovieDetails(movie: Movie): void {
    this.router.navigate(['/movies/details'], { state: movie });
  }

  private filterMovies(value: string): Movie[] {
    const filterValue = value.toLowerCase();

    return this.movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterValue) ||
        movie.releasedDate.toLowerCase().includes(filterValue)
    );
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
