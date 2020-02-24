import {enableProdMode, ViewEncapsulation} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from '@app/env';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  defaultEncapsulation: ViewEncapsulation.None,
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
