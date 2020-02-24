import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '@app/env';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
