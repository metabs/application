import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellComponent} from './containers';


const routes: Routes = [{
  path: '',
  component: ShellComponent,
  children: [{
    path: 'workspaces',
    loadChildren: () => import('./features/workspaces/workspaces.module').then(m => m.WorkspacesModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {
}
