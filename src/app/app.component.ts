import {Component, ViewEncapsulation} from '@angular/core';
import {WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BrowserTab, BrowserTabsQuery, BrowserTabsService} from '@app/core/browser-tabs';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(
    public readonly browserTabsQuery: BrowserTabsQuery,
    private readonly browserTabsService: BrowserTabsService,
    public readonly workspacesQuery: WorkspacesQuery,
    private readonly workspacesService: WorkspacesService,
  ) {
    this.workspacesService.get()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe();

    this.browserTabsQuery.selectAll().subscribe(console.log);

    this.browserTabsService.listenTabsChanges();
  }

  public onRemoveTab(id: string | number) {
    debugger;
    this.browserTabsService.remove(id);
  }

  public trackById(index: number, item: BrowserTab) {
    return item.id;
  }
}
