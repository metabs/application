import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkspaceDetailComponent, WorkspacesComponent} from './containers';

const routes: Routes = [{
  path: '',
  component: WorkspacesComponent,
  children: [{
    path: ':workspaceId',
    component: WorkspaceDetailComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacesRoutingModule {
}
