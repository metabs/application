import {ApiTab, createTab, Tab} from './tab.model';
import {uuid} from '../../uuid';

export interface ApiCollection {
  id: string;
  name: string;
  tabs: ApiTab[];
  created: string;
  updated: string;
}

export interface Collection {
  id: string;
  name: string;
  tabs: Tab[];
  created: string;
  updated: string;
}

export function createCollection(params: Partial<Collection | ApiCollection>) {
  return {
    id: params.id || uuid(),
    name: params.name,
    tabs: (params.tabs || []).map(createTab),
    created: params.created,
    updated: params.updated,
  } as Collection;
}
