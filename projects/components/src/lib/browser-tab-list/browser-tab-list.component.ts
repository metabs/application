import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

interface Tab {
  id: number;
  favIconUrl: string;
  title: string;
}

@Component({
  selector: 'cmp-browser-tab-list',
  templateUrl: './browser-tab-list.component.html',
  styleUrls: ['./browser-tab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BrowserTabListComponent {
  @Input() tabs: Tab[];
  @Output() remove = new EventEmitter<Tab>();

  public trackById(index: number, item: Tab) {
    return item.id;
  }
}
