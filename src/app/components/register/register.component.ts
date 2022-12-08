import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RegisterService]
})
export class RegisterComponent {
  readonly register = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipCode: new FormControl(),
    }),
    phone: new FormControl()
  });

  constructor(private _registerService: RegisterService) {
  }

  onRegisterSubmitted(register: FormGroup): void {
    this._registerService.create({
      email: register.get('email')?.value,
      username: register.get('username')?.value,
      password: register.get('password')?.value,

      name: {
        firstname: register.get('name.firstname')?.value,
        lastname: register.get('name.lastname')?.value
      },

      address: {
        city: register.get('address.city')?.value,
        street: register.get('address.street')?.value,
        number: register.get('address.number')?.value,
        zipcode: register.get('address.zipCode')?.value
      },
      phone: register.get('phone')?.value
    }).subscribe();

  }
}
