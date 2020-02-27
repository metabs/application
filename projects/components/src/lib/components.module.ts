import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import {ButtonComponent} from './button/button.component';
import {BrowserTabComponent} from './browser-tab/browser-tab.component';
import {BrowserTabListComponent} from './browser-tab-list/browser-tab-list.component';
import {IconComponent} from './icon/icon.component';
import {EditableComponent} from './editable/editable.component';
import {FocusDirective} from './focus/focus.directive';


@NgModule({
  declarations: [ButtonComponent, BrowserTabComponent, BrowserTabListComponent, IconComponent, EditableComponent, FocusDirective],
  imports: [CommonModule, MatIconModule, MatRippleModule, ReactiveFormsModule],
  exports: [ButtonComponent, BrowserTabComponent, BrowserTabListComponent, IconComponent, EditableComponent]
})
export class ComponentsModule {
}
