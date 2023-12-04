import { Injectable, inject } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { Router } from 'express';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterEventService {
  private router = inject(Router);

  setVariableToShowComponentBasedOnURL(variable: boolean): void {
    this.router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe((e: unknown) => {
      if (e instanceof ResolveEnd) {
        variable = !e.urlAfterRedirects.includes('/not-found');
      }
    });
  }

}
