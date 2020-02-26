import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cmp-window-tab',
  templateUrl: './window-tab.component.html',
  styleUrls: ['./window-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WindowTabComponent {
  @Input() id: string;
  @Input() image: string;
  @Input() title: string;
  @Output() remove = new EventEmitter<string>();
}
