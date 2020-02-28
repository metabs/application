import {Injectable, NgZone} from '@angular/core';
import {ID} from '@datorama/akita';
import {BrowserTabsStore} from './browser-tabs.store';
import {BrowserTab} from './browser-tab.model';

@Injectable({providedIn: 'root'})
export class BrowserTabsService {

  constructor(
    private browserTabsStore: BrowserTabsStore,
    private readonly ngZone: NgZone,
  ) {
  }

  public remove(id: ID) {
    // @ts-ignore
    chrome.tabs.remove(id);
  }

  public listenTabsChanges() {
    try {


      // @ts-ignore
      chrome.windows.getAll({populate: true}, (windowList: chrome.windows.Window[]) => {
        const tabs = [] as BrowserTab[];
        for (const window of windowList) {
          for (const tab of window.tabs) {
            tabs.push(tab);
          }
        }
        this.ngZone.run(() => {
          this.browserTabsStore.set(tabs);
        });
      });
      // @ts-ignore
      chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
        this.ngZone.run(() => {
          this.browserTabsStore.upsert(tabId, tab);
        });
      });
      // @ts-ignore
      chrome.tabs.onRemoved.addListener(id => {
        this.ngZone.run(() => {
          this.browserTabsStore.remove(id);
        });
      });
    } catch (e) {
    }
  }
}
