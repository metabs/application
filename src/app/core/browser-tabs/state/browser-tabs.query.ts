import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BrowserTabsStore, BrowserTabsState } from './browser-tabs.store';

@Injectable({ providedIn: 'root' })
export class BrowserTabsQuery extends QueryEntity<BrowserTabsState> {

  constructor(protected store: BrowserTabsStore) {
    super(store);
  }

}
