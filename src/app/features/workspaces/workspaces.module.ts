import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared';

import {WorkspacesRoutingModule} from './workspaces-routing.module';
import {WorkspaceDetailComponent} from './containers';
import {CollectionComponent} from './components';

@NgModule({
  declarations: [WorkspaceDetailComponent, CollectionComponent],
  imports: [
    SharedModule,
    WorkspacesRoutingModule,
  ]
})
export class WorkspacesModule {
}
