import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from 'components';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class SharedModule {
}
