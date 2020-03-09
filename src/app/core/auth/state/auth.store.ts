import {Injectable} from '@angular/core';
import {Auth} from './auth.model';
import {Store, StoreConfig} from '@datorama/akita';

// tslint:disable-next-line:no-empty-interface
export interface AuthState extends Auth {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'auth'})
export class AuthStore extends Store<AuthState> {

  constructor() {
    super({});
  }

}

