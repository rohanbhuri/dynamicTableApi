import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterTransition } from '../../router.animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [RouterTransition()],
  host: { '[@routerTransition]': '' }
})
export class ContactUsComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  checkFormValid(): boolean {
    // tslint:disable-next-line:max-line-length
    return this.email.valid && this.name.valid && this.subject.valid && this.message.valid;
  }

  submit() {

  }

}
