import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorspaceDetailComponent } from './containers/worspace-detail/worspace-detail.component';


@NgModule({
  declarations: [WorspaceDetailComponent],
  imports: [
    CommonModule,
    WorkspacesRoutingModule
  ]
})
export class WorkspacesModule { }
