import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspacesStore} from './workspaces.store';
import {ApiWorkspace, createWorkspace, Workspace} from './workspace.model';
import {map} from 'rxjs/operators';
import {from, of} from 'rxjs';
import mock from '../workspaces.mock';
import {createCollection} from './collection.model';

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

  public createWorkspace() {
    this.workspacesStore.add(createWorkspace({name: 'Untitled Workspace'}));
  }

  public createCollection(workspace) {
    this.workspacesStore.update(workspace.id, {
      collections: [...workspace.collections, createCollection({name: 'Untitled Collection'})]
    });
  }

  public updateCollectionName(workspace: Workspace, collectionId: string, name: string) {
    this.workspacesStore.update(workspace.id, {
      collections: workspace.collections.map(c => {
        return c.id === collectionId ? {...c, name} : c;
      })
    });
  }

  public removeCollection(workspace: Workspace, collectionId: string) {
    this.workspacesStore.update(workspace.id, {
      collections: workspace.collections.filter(c => c.id !== collectionId)
    });
  }

  public removeTab(workspace: Workspace, collectionId: string, tabId: string) {
    this.workspacesStore.update(workspace.id, {
      collections: workspace.collections.map(c => {
        return c.id === collectionId ? {...c, tabs: c.tabs.filter(t => t.id !== tabId)} : c;
      })
    });
  }
}
