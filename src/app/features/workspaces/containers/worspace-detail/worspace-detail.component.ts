import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-worspace-detail',
  templateUrl: './worspace-detail.component.html',
  styleUrls: ['./worspace-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorspaceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
