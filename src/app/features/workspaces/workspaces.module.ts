import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorkspaceDetailComponent } from './containers/workspace-detail/workspace-detail.component';


@NgModule({
  declarations: [WorkspaceDetailComponent],
  imports: [
    CommonModule,
    WorkspacesRoutingModule
  ]
})
export class WorkspacesModule { }
