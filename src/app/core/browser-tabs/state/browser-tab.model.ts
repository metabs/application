// @ts-ignore
export interface BrowserTab extends chrome.tabs.Tab {
  id: number;
  index: number;
  active: boolean;
  audible: boolean;
  autoDiscardable: boolean;
  discarded: boolean;
  favIconUrl: string;
  height: number;
  highlighted: boolean;
  incognito: boolean;
  mutedInfo: {
    muted: boolean;
  };
  pinned: boolean;
  selected: boolean;
  status: string;
  title: string;
  url: string;
  width: number;
  windowId: number;
}

export function createBrowserTab(params: Partial<BrowserTab>) {
  return {
    id: params.id,
    index: params.index,
    active: params.active,
    audible: params.audible,
    autoDiscardable: params.autoDiscardable,
    discarded: params.discarded,
    favIconUrl: params.favIconUrl,
    height: params.height,
    highlighted: params.highlighted,
    incognito: params.incognito,
    mutedInfo: params.mutedInfo || {},
    pinned: params.pinned,
    selected: params.selected,
    status: params.status,
    title: params.title,
    url: params.url,
    width: params.width,
    windowId: params.windowId,
  } as BrowserTab;
}
