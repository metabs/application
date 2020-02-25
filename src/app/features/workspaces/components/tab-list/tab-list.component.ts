import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {Tab} from '@app/core/workspaces';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TabListComponent {
  @Input() tabs: Tab[];

  public trackById(index: number, item: Tab): string {
    return item.id;
  }
}
