import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WorkspacesStore, WorkspacesState} from './workspaces.store';
import {RouterQuery} from '@datorama/akita-ng-router-store';
import {switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class WorkspacesQuery extends QueryEntity<WorkspacesState> {

  selectWorkspaceByRouterParams$ = this.routerQuery
    .selectParams('workspaceId')
    .pipe(
      switchMap(id => this.selectEntity(id)),
    );

  constructor(
    protected store: WorkspacesStore,
    private readonly routerQuery: RouterQuery,
  ) {
    super(store);
  }
}
