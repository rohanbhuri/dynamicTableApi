import { Component, OnInit } from '@angular/core';
import { RouterTransition } from '../../router.animations';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class ProfileComponent implements OnInit {
  user;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  constructor() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    // this.username.value = this.user.username;
    // this.email.value = this.user.email;
    // this.phone.value = this.user.phone;
  }

  ngOnInit() {
  }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  checkFormValid(): boolean {
    // tslint:disable-next-line:max-line-length
    return this.username.valid && this.email.valid && this.phone.valid;
  }

  submit() {

  }
}
