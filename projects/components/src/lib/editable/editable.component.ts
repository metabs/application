import {Component, ViewEncapsulation, ChangeDetectionStrategy, AfterContentInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'cmp-editable',
  exportAs: 'cmpEditable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableComponent implements AfterContentInit {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  public control: FormControl;
  public isEditing = false;

  constructor(
    private readonly fb: FormBuilder,
  ) {
  }

  public ngAfterContentInit(): void {
    this.control = this.fb.control(this.value, [Validators.required, Validators.minLength(3)]);
  }


  public enableEdit() {
    this.isEditing = true;
  }

  public disableEdit() {
    if (this.control.invalid) {
      return;
    }
    this.valueChange.emit(this.control.value);
    this.isEditing = false;
    this.control.reset(this.control.value);
  }
}
