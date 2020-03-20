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
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormFieldComponent} from './form-field/form-field.component';


@NgModule({
  declarations: [
    ButtonComponent,
    BrowserTabComponent,
    BrowserTabListComponent,
    IconComponent,
    EditableComponent,
    FocusDirective,
    FormFieldComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  exports: [
    ButtonComponent,
    BrowserTabComponent,
    BrowserTabListComponent,
    IconComponent,
    EditableComponent,
    DragDropModule,
    FormFieldComponent,
  ]
})
export class ComponentsModule {
}
