import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  protected showSpoiler = false;

  toggleShowSpoiler(): void {
    this.showSpoiler = !this.showSpoiler;
  }
}
