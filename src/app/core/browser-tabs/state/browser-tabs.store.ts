import { Injectable } from '@angular/core';
import { BrowserTab } from './browser-tab.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface BrowserTabsState extends EntityState<BrowserTab> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'browser-tabs' })
export class BrowserTabsStore extends EntityStore<BrowserTabsState> {

  constructor() {
    super();
  }

}

