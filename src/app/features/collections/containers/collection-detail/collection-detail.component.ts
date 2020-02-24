import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {CollectionsQuery} from '@app/core/collections/state/collections.query';
import {CollectionsService} from '@app/core/collections/state/collections.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionDetailComponent implements OnInit {

  constructor(
    public readonly collectionsQuery: CollectionsQuery,
    private readonly collectionsService: CollectionsService,
  ) {
  }

  ngOnInit(): void {
    this.collectionsService.get().subscribe();
  }

}
