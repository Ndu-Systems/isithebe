import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [SpinnerComponent]
,
  declarations: [SpinnerComponent]
})
export class SpinnerModule { }
