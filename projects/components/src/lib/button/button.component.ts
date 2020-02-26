import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cmp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() type: 'flat' | 'fab' | 'mini-fab' = 'flat';

  @HostBinding('class.cmp-button--flat') get isFlat() {
    return this.type === 'flat';
  }

  @HostBinding('class.cmp-button--fab') get isFab() {
    return this.type === 'fab';
  }

  @HostBinding('class.cmp-button--mini-fab') get isMiniFab() {
    return this.type === 'mini-fab';
  }
}
