import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {CollectionsStore, CollectionsState} from './collections.store';
import {RouterQuery} from '@datorama/akita-ng-router-store';
import {switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CollectionsQuery extends QueryEntity<CollectionsState> {

  public selectCollectionByParams$ = this.routerQuery.selectParams('collectionId').pipe(
    switchMap(id => this.selectEntity(id)),
  );

  constructor(
    protected store: CollectionsStore,
    private readonly routerQuery: RouterQuery,
  ) {
    super(store);
  }

}
