import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '@app/shared';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './containers';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
