import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSmallMenu = false;
  user;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
   }

  ngOnInit() {
  }

}
