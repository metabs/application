import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRippleModule} from '@angular/material/core';

import {ButtonComponent} from './button/button.component';
import {WindowTabComponent} from './window-tab/window-tab.component';
import {WindowTabListComponent} from './window-tab-list/window-tab-list.component';
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ButtonComponent, WindowTabComponent, WindowTabListComponent, IconComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [ButtonComponent, WindowTabComponent, WindowTabListComponent]
})
export class ComponentsModule {
}
