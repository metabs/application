import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'cmp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  private isDisabled: boolean;

  @Input() type: 'flat' | 'fab' | 'mini-fab' = 'flat';
  @Input() color: 'primary' | 'transparent' = 'transparent';

  @Input() set disabled(value) {
    this.isDisabled = coerceBooleanProperty(value);
  }

  get disabled() {
    return this.isDisabled;
  }

  @HostBinding('class.cmp-button--flat') get isFlat() {
    return this.type === 'flat';
  }

  @HostBinding('class.cmp-button--fab') get isFab() {
    return this.type === 'fab';
  }

  @HostBinding('class.cmp-button--mini-fab') get isMiniFab() {
    return this.type === 'mini-fab';
  }

  @HostBinding('class.cmp-button--primary') get isPrimaryColor() {
    return this.color === 'primary';
  }

  @HostBinding('class.cmp-button--transparent') get isTransparentColor() {
    return this.color === 'transparent';
  }

  @HostBinding('class.cmp-button--disabled') get isDisabledButton() {
    return this.disabled;
  }
}
