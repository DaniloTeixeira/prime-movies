import { ViewportScroller } from '@angular/common';
import { Component, DestroyRef, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly viewPortScroller = inject(ViewportScroller);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('pageTop') pageTop!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowsScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    this.shouldScrollToTopIcon = scrollTop > 1000;
  }

  protected shouldScrollToTopIcon!: boolean;
  protected shouldShowHeaderAndFooter!: boolean;
  protected isMovieListPage!: boolean;

  constructor() {
    this.setShowHeaderFooterAndisMovieListPage();

  }

  onScrollToTop(): void {
    this.pageTop.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  private setShowHeaderFooterAndisMovieListPage(): void {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(event => event instanceof ResolveEnd)).subscribe((e) => {
        if (e instanceof ResolveEnd) {
          this.shouldShowHeaderAndFooter = !e.urlAfterRedirects.includes('/not-found');
          this.isMovieListPage = e.urlAfterRedirects.includes('/list');
        }
      });
  }
}