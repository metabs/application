import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CollectionDetailComponent} from './containers';


const routes: Routes = [{
  path: ':collectionId',
  component: CollectionDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
