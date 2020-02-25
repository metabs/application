import {NgModule} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';

import {ButtonComponent} from './button/button.component';


@NgModule({
  declarations: [ButtonComponent],
  imports: [MatRippleModule],
  exports: [ButtonComponent]
})
export class ComponentsModule {
}
