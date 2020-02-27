import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRippleModule} from '@angular/material/core';

import {ButtonComponent} from './button/button.component';
import {BrowserTabComponent} from './browser-tab/browser-tab.component';
import {BrowserTabListComponent} from './browser-tab-list/browser-tab-list.component';
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ButtonComponent, BrowserTabComponent, BrowserTabListComponent, IconComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [ButtonComponent, BrowserTabComponent, BrowserTabListComponent, IconComponent]
})
export class ComponentsModule {
}
