import { Component, OnInit } from '@angular/core';
import { RouterTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
