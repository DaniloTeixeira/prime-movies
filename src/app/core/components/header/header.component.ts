import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true }) isMovieListPage!: boolean;

  get labelButton(): string {
    return this.isMovieListPage ? 'Go to Landing Page' : 'Go to Movie List';
  }

  get path(): string {
    return this.isMovieListPage ? '/movies' : '/movies/list';
  }
}
