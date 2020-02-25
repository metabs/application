import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorkspaceDetailComponent } from './containers/workspace-detail/workspace-detail.component';
import { CollectionComponent } from './components/collection/collection.component';
import { TabComponent } from './components/tab/tab.component';
import { TabListComponent } from './components/tab-list/tab-list.component';


@NgModule({
  declarations: [WorkspaceDetailComponent, CollectionComponent, TabComponent, TabListComponent],
  imports: [
    CommonModule,
    WorkspacesRoutingModule
  ]
})
export class WorkspacesModule { }
