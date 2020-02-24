import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionDetailComponent implements OnInit {

  collectionId$ = this.activatedRoute.params.pipe(
    pluck('collectionId')
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

}
