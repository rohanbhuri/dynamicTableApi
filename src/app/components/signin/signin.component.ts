import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterTransition } from '../../router.animations';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [RouterTransition()],
  host: {'[@routerTransition]': ''}
})
export class SigninComponent implements OnInit {
  user = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  };
  password;

  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.user.email.hasError('required') ? 'You must enter a value' :
      this.user.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
