import {Component, ViewEncapsulation} from '@angular/core';
import {WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(
    public readonly workspacesQuery: WorkspacesQuery,
    private readonly workspacesService: WorkspacesService
  ) {
    this.workspacesService.get()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe();
  }

}
