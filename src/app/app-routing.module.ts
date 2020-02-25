import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/workspaces',
}, {
  path: 'workspaces',
  loadChildren: () => import('./features/workspaces/workspaces.module').then(m => m.WorkspacesModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
