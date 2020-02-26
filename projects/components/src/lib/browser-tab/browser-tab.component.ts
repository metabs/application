import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cmp-browser-tab',
  templateUrl: './browser-tab.component.html',
  styleUrls: ['./browser-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BrowserTabComponent {
  @Input() id: string;
  @Input() image: string;
  @Input() title: string;
  @Output() remove = new EventEmitter<string>();
}
