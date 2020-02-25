import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorspaceDetailComponent} from './containers';

const routes: Routes = [{
  path: ':workspaceId',
  component: WorspaceDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacesRoutingModule {
}
