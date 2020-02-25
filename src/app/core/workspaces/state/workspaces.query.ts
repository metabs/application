import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WorkspacesStore, WorkspacesState } from './workspaces.store';

@Injectable({ providedIn: 'root' })
export class WorkspacesQuery extends QueryEntity<WorkspacesState> {

  constructor(protected store: WorkspacesStore) {
    super(store);
  }

}
