import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input({ required: true }) isMovieListPage!: boolean;

  get labelButton(): string {
    return this.isMovieListPage ? 'Go to Home' : 'Go to Movie List';
  }

  get path(): string {
    return this.isMovieListPage ? '/movies' : '/movies/list';
  }
}
