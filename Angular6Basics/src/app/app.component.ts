import { Component } from '@angular/core';

// component decreator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/air.jpg',
      '../assets/images/secure.jpg',
      '../assets/images/transport.jpg',
      '../assets/images/marvel.jpeg',
    ];
  }

}
