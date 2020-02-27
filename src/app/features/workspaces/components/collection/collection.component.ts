import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren, EventEmitter,
  HostBinding,
  Input, Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {BrowserTabComponent} from 'components';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CollectionComponent implements AfterContentInit {
  @Input() name: string;
  @Output() remove = new EventEmitter<void>();
  @ContentChildren(BrowserTabComponent, {descendants: true}) tabs: QueryList<BrowserTabComponent>;

  @HostBinding('class.app-collection--open') get getIsOpenContentClass() {
    return this.isOpenContent;
  }

  public isOpenContent = true;
  private tabsLength$ = new BehaviorSubject(0);
  public hasTabs$ = this.tabsLength$.asObservable().pipe(map(length => length > 0));

  public ngAfterContentInit(): void {
    this.tabsLength$.next(this.tabs.length);
    this.tabs.changes
      .pipe(untilDestroyed(this))
      .subscribe((e) => {
        this.tabsLength$.next(e.length);
      });
  }

  public toggleContent() {
    this.isOpenContent = !this.isOpenContent;
  }
}
