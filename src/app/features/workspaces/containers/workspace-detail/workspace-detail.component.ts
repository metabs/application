import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Collection, Tab, Workspace, WorkspacesQuery, WorkspacesService} from '@app/core/workspaces';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
    public readonly workspacesService: WorkspacesService
  ) {
  }

  public ngOnInit(): void {
    this.workspacesService.get()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe();
  }

  public trackById(index: number, item: Collection | Tab): string {
    return item.id;
  }

  public onChangeName(workspace: Workspace, collectionId: string, newName: string) {
    this.workspacesService.updateCollectionName(workspace, collectionId, newName);
  }

  public onDropTab(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
