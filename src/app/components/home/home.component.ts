import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideNumber = 0;
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  constructor(
    public ngZone: NgZone,
  ) {
    this.sliderAuto();
  }

  ngOnInit() {

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
