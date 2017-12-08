import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';

export const TripsList = {
  name: 'tripsList',
  component: TripsListComponent,
  url: '/'
};

export const NewTrip = {
  name: 'newTrip',
  component: NewTripComponent,
  url: '/new'
};

@NgModule({
  declarations: [
    AppComponent,
    NewTripComponent,
    TripsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: [
        TripsList,
        NewTrip
      ],
      useHash: true,
      otherwise: '/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
