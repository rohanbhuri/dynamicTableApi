import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSmallMenu = false;
  colorHeader = false;
  user;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/profile') {
          this.colorHeader = true;
        } else {
          this.colorHeader = false;
        }
        this.user = JSON.parse(localStorage.getItem('currentUser'));
      }
    });
  }

  ngOnInit() {
  }

}
