import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  };
  password;
  confirmPassword = new FormControl('', [Validators.required]);
  terms = new FormControl(false, [Validators.required]);


  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.user.email.hasError('required') ? 'You must enter a value' :
      this.user.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
