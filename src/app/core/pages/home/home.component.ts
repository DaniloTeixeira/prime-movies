import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected bgImages = [
    {
      url: '../../../../assets/images/avengers-bg.jpg',
    },
    {
      url: '../../../../assets/images/guardians-of-the-galaxy-bg.jpg',
    },
    {
      url: '../../../../assets/images/knives-out-bg.jpg',
    },
    {
      url: '../../../../assets/images/spider-man-bg.png',
    },
    {
      url: '../../../../assets/images/tenet-bg.jpg',
    },
  ];



  // return `background:
  // linear-gradient(#000, rgba(0,0,0,0.5), #000),
  // url(`${ this.bgImages[0].url; } `) no-repeat center center fixed;
  // background-size: cover`;
}
