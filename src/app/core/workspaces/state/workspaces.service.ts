import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { WorkspacesStore } from './workspaces.store';
import { Workspace } from './workspace.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WorkspacesService {

  constructor(private workspacesStore: WorkspacesStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Workspace[]>('https://api.com').pipe(tap(entities => {
      this.workspacesStore.set(entities);
    }));
  }

  add(workspace: Workspace) {
    this.workspacesStore.add(workspace);
  }

  update(id, workspace: Partial<Workspace>) {
    this.workspacesStore.update(id, workspace);
  }

  remove(id: ID) {
    this.workspacesStore.remove(id);
  }
}
