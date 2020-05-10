import {Directive, HostListener} from '@angular/core';
import {Location} from '@angular/common';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  // TODO: make export of go back directive
  constructor(private location: Location) {}

  @HostListener('click') onClick() {
    this.location.back();
  }

}
