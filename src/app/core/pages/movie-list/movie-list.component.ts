import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { MOVIES } from '../../data/movies';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly destroy = inject(DestroyRef);

  protected readonly movies = MOVIES;
  protected filterField = new FormControl('');
  protected filteredMovies$!: Observable<Movie[]>;

  ngOnInit(): void {
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
      takeUntilDestroyed(this.destroy),
      startWith(''),
      map((value) => this.filterMovies(value as string))
    );
  }
}
