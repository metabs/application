import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {HttpClient} from '@angular/common/http';
import {WorkspacesStore} from './workspaces.store';
import {ApiWorkspace, createWorkspace, Workspace} from './workspace.model';
import {map} from 'rxjs/operators';
import {from, of} from 'rxjs';
import mock from '../workspaces.mock';

@Injectable({providedIn: 'root'})
export class WorkspacesService {

  constructor(
    private workspacesStore: WorkspacesStore,
    private http: HttpClient,
  ) {
  }

  get() {
    return from(of(mock as ApiWorkspace[])).pipe(
      map(entities => {
        const workspaces = entities.map(createWorkspace);
        this.workspacesStore.set(workspaces);
        return workspaces;
      })
    );
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
