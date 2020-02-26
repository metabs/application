import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'cmp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
}
