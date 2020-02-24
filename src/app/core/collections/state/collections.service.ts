import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {HttpClient} from '@angular/common/http';
import {CollectionsStore} from './collections.store';
import {Collection, createCollection} from './collection.model';
import {tap} from 'rxjs/operators';
import {environment} from '@app/env';

@Injectable({providedIn: 'root'})
export class CollectionsService {

  constructor(
    private collectionsStore: CollectionsStore,
    private http: HttpClient,
  ) {
  }

  get() {
    return this.http.get<Collection[]>(environment.api.collections).pipe(tap(entities => {
      this.collectionsStore.set(entities.map(createCollection));
    }));
  }

  add(collection: Collection) {
    this.collectionsStore.add(collection);
  }

  update(id, collection: Partial<Collection>) {
    this.collectionsStore.update(id, collection);
  }

  remove(id: ID) {
    this.collectionsStore.remove(id);
  }
}
