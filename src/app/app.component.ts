import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('pageTop') pageTop!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowsScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    this.shouldScrollToTopIcon = scrollTop > 1000;
  }

  protected shouldScrollToTopIcon!: boolean;
  protected shouldShowHeaderAndFooter!: boolean;
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe((e) => {
      if (e instanceof ResolveEnd) {
        this.shouldShowHeaderAndFooter = !e.urlAfterRedirects.includes('/not-found');
      }
    });
  }

  onScrollToTop(): void {
    this.pageTop.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}