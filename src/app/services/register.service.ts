import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterModel} from '../models/register.model';

@Injectable()
export class RegisterService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: { password: any; address: { zipcode: any; number: any; city: any; street: any }; phone: any; name: { firstname: any; lastname: any }; email: any; username: any }): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>('https://fakestoreapi.com/users', user);
  }
}
