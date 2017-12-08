import { Component } from '@angular/core';
import { Trip } from '../app/models/trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flights of a Lifetime';

  trip: Trip = {
    name: 'Super Flights to Mars',
    price: 18200,
    duration: '2 Earth Years',
    description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    // image_url: 'https://vignette.wikia.nocookie.net/vsbattles/images/e/e9/Mars_Planet.png/revision/latest?cb=20151113063011'
  };

  trips: Array<Trip> = [this.trip, this.trip, this.trip];

}
