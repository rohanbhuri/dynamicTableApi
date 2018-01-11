import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterTransition } from '../../router.animations';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class SignupComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  terms = new FormControl(false, [Validators.required]);


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // this.auth.registerUser(this.user).subscribe(res => {

    // });
  }

}
