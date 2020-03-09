import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'workspaces',
}, {
  path: '',
  loadChildren: () => import('./features/shell/shell.module').then(m => m.ShellModule),
}, {
  path: 'login',
  loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
