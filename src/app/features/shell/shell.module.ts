import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared';
import {ShellRoutingModule} from './shell-routing.module';
import {ShellComponent} from './containers';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    SharedModule,
    ShellRoutingModule
  ]
})
export class ShellModule {
}
