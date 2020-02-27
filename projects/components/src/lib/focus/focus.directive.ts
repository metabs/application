import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[cmpFocus]'
})
export class FocusDirective implements OnInit {

  constructor(
    private readonly elementRef: ElementRef
  ) {
  }

  public ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
