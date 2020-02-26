import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'cmp-browser-tab-list',
  templateUrl: './browser-tab-list.component.html',
  styleUrls: ['./browser-tab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BrowserTabListComponent {
  @Input() type: 'column' | 'row' = 'column';

  @HostBinding('class.cmp-browser-tab-list--column') get getColumnClass() {
    return this.type === 'column';
  }

  @HostBinding('class.cmp-browser-tab-list--row') get getRowClass() {
    return this.type === 'row';
  }
}
