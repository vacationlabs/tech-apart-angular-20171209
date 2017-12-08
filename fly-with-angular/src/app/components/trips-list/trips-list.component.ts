import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
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

  totalMoney = 0;
  travelCost = 500;
  pendingAmount = Math.max(this.totalMoney - this.travelCost, 0);

  totalMoneyChanged(value) {
    this.totalMoney = value;
    this.pendingAmount = Math.max(this.totalMoney - this.travelCost, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
