import {Tab} from './tab.model';

export interface Collection {
  id: number | string;
  name: string;
  tabs: Tab[];
  created: string;
  updated: string;
}

export function createCollection(params: Partial<Collection>) {
  return {
    id: params.id,
    name: params.name,
    tabs: params.tabs || [],
    created: params.created,
    updated: params.updated,
  } as Collection;
}
