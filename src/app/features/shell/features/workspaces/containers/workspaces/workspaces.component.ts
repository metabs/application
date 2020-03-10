import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BrowserTab, BrowserTabsQuery, BrowserTabsService} from '@app/core/browser-tabs';
import {WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WorkspacesComponent {

  constructor(
    private readonly http: HttpClient,
    public readonly browserTabsQuery: BrowserTabsQuery,
    private readonly browserTabsService: BrowserTabsService,
    public readonly workspacesQuery: WorkspacesQuery,
    public readonly workspacesService: WorkspacesService,
  ) {
    this.workspacesService.get()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe();

    this.browserTabsQuery.selectAll().subscribe(console.log);

    this.browserTabsService.listenTabsChanges();
    // this.http.get('http://localhost/workspaces').subscribe(console.log, console.log);
  }

  public onRemoveTab(id: string | number) {
    this.browserTabsService.remove(id);
  }

  public trackById(index: number, item: BrowserTab) {
    return item.id;
  }
}
