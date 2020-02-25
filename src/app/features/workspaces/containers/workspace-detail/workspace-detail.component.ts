import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Collection, Tab, WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-workspace-detail',
  templateUrl: './workspace-detail.component.html',
  styleUrls: ['./workspace-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WorkspaceDetailComponent implements OnInit {

  constructor(
    public readonly workspacesQuery: WorkspacesQuery,
    private readonly workspacesService: WorkspacesService
  ) {
  }

  public ngOnInit(): void {
    this.workspacesService.get()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe();
  }

  public trackById(index: number, item: Collection): string {
    return item.id;
  }
}
