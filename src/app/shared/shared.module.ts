import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/go-back.directive';



@NgModule({
  declarations: [GoBackDirective],
  exports: [GoBackDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
