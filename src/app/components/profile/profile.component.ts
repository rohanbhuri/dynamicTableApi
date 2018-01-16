import { Component, OnInit } from '@angular/core';
import { RouterTransition } from '../../router.animations';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


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
  constructor(public auth: AuthService, public snackBar: MatSnackBar, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.username.setValue(this.user.username);
    this.email.setValue(this.user.email);
    this.phone.setValue(this.user.phone);
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
    const data = {
      username: this.username.value,
      email: this.email.value,
      phone: this.phone.value
    };
    this.auth.updateUser(this.user._id, data).subscribe(res => {
      if (res.status) {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        console.log(res.user);
        this.router.navigate(['/home']);
      } else {
        this.username.setValue(this.user.username);
        this.email.setValue(this.user.email);
        this.phone.setValue(this.user.phone);
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
