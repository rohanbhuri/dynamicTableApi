import { Component, OnInit, NgZone } from '@angular/core';
import { RouterTransition } from '../../router.animations';
import { RestaurantService } from '../../services/restaurant.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class HomeComponent implements OnInit {

  slideNumber = 0;
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  restaurants = [];
  siteUrl = environment.siteUrl;

  constructor(
    public ngZone: NgZone,
    public restaurantService: RestaurantService
  ) {
    this.sliderAuto();
  }

  ngOnInit() {
    this.searchAllRestaurant();
  }

  searchAllRestaurant() {
    this.restaurantService.searchAllRestaurant().subscribe(res => {
      this.restaurants = res.restaurants;
      console.log(this.restaurants);
    });
  }

  sliderAuto() {
    setInterval(() => {
      this.ngZone.run(() => {
        if (this.slideNumber === 2) { this.slideNumber = 0; return; }
        if (this.slideNumber === 0) { this.slideNumber = 1; return; }
        if (this.slideNumber === 1) { this.slideNumber = 2; return; }
        console.log('auto', this.slideNumber);
      });
    }, 4000);
  }

  scrollDown() {
    document.querySelector('.section-2').scrollIntoView({
      behavior: 'smooth'
    });
  }

}
