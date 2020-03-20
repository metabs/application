import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, Self, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'cmp-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  @Input() type: 'text' | 'email' | 'number' | 'password' | 'date' = 'text';
  @Input() placeholder = '';
  @Input() value: any = '';
  @Input() disabled: boolean;

  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(
    @Self() public readonly ngControl: NgControl,
    private readonly cd: ChangeDetectorRef,
  ) {
    ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    const {control} = this.ngControl;
    if (control.validator) {
      control.setValidators(control.validator);
      control.updateValueAndValidity();
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cd.detectChanges();
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public get hasErrors() {
    return this.ngControl && this.ngControl.control.dirty && this.ngControl.control.invalid;
  }
}
