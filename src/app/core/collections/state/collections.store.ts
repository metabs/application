import { Injectable } from '@angular/core';
import { Collection } from './collection.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CollectionsState extends EntityState<Collection> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'collections' })
export class CollectionsStore extends EntityStore<CollectionsState> {

  constructor() {
    super();
  }

}

