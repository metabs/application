import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@app/shared';

import {WorkspacesRoutingModule} from './workspaces-routing.module';
import {WorkspaceDetailComponent} from './containers';
import {CollectionComponent} from './components';

@NgModule({
  declarations: [WorkspaceDetailComponent, CollectionComponent],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    WorkspacesRoutingModule,
  ]
})
export class WorkspacesModule {
}
