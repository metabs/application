import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '@app/shared';

import {WorkspacesRoutingModule} from './workspaces-routing.module';
import {WorkspaceDetailComponent, WorkspacesComponent} from './containers';
import {CollectionComponent} from './components';

@NgModule({
  declarations: [WorkspaceDetailComponent, CollectionComponent, WorkspacesComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    WorkspacesRoutingModule,
  ]
})
export class WorkspacesModule {
}
