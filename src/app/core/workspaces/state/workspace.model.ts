import {Collection} from './collection.model';

export interface Workspace {
  id: string;
  name: string;
  ownerID: string;
  collections: Collection[];
  created: string;
  updated: string;
}

export function createWorkspace(params: Partial<Workspace>) {
  return {
    id: params.id,
    name: params.name,
    ownerID: params.ownerID,
    collections: params.collections,
    created: params.created,
    updated: params.updated,
  } as Workspace;
}
