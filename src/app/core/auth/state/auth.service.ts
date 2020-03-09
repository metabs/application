import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthStore} from './auth.store';
import {environment} from '@app/env';

interface Sign {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  private static API = environment.api.customers;

  constructor(
    private authStore: AuthStore,
    private http: HttpClient,
  ) {
  }

  public signUp(payload: Sign) {
    return this.http.post(`${AuthService.API}/`, payload);
  }

  login(payload: Sign) {
    return this.http.post(`${AuthService.API}/login`, payload);
  }

}
