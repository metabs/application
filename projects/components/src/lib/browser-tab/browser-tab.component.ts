import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cmp-browser-tab',
  templateUrl: './browser-tab.component.html',
  styleUrls: ['./browser-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BrowserTabComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() type: 'summary' | 'minimal' = 'minimal';
  @Output() remove = new EventEmitter<void>();

  public isTypeMinimal: boolean;

  @HostBinding('class.cmp-browser-tab--minimal') get getMinimalClass() {
    this.isTypeMinimal = this.type === 'minimal';
    return this.isTypeMinimal;
  }

  @HostBinding('class.cmp-browser-tab--summary') get getSummaryClass() {
    return this.type === 'summary';
  }
}
