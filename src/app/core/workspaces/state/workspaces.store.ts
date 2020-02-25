import { Injectable } from '@angular/core';
import { Workspace } from './workspace.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface WorkspacesState extends EntityState<Workspace> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'workspaces' })
export class WorkspacesStore extends EntityStore<WorkspacesState> {

  constructor() {
    super();
  }

}

