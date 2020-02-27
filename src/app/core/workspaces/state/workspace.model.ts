import {ApiCollection, Collection, createCollection} from './collection.model';
import {uuid} from '../../uuid';

export interface ApiWorkspace {
  id: string;
  name: string;
  customer_id: string;
  collections: ApiCollection[];
  created: string;
  updated: string;
}

export interface Workspace {
  id: string;
  name: string;
  customerId: string;
  collections: Collection[];
  created: string;
  updated: string;
}

export function createWorkspace(params: Partial<Workspace | ApiWorkspace>) {
  return {
    id: params.id || uuid(),
    name: params.name,
    customerId: (params as Workspace).customerId || (params as ApiWorkspace).customer_id,
    collections: (params.collections || []).map(createCollection),
    created: params.created,
    updated: params.updated,
  } as Workspace;
}
