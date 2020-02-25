import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';

@Component({
  selector: 'app-workspace-detail',
  templateUrl: './workspace-detail.component.html',
  styleUrls: ['./workspace-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceDetailComponent implements OnInit {

  constructor(
    public readonly workspacesQuery: WorkspacesQuery,
    private readonly workspacesService: WorkspacesService
  ) {
  }

  ngOnInit(): void {
    this.workspacesService.get().subscribe();
  }
}
