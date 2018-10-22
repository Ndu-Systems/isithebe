import { CallbacksRoutes } from './callbacks.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbacksComponent } from './callbacks.component';
import { ListCallbacksComponent } from './list-callbacks';
import { PageHeaderModule, PrimeNg, SpinnerModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CallStatusPipe } from './pipes/call-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    CallbacksRoutes,
    PageHeaderModule,
    CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [...PrimeNg],
  declarations: [CallbacksComponent, ListCallbacksComponent,CallStatusPipe]
})
export class CallbacksModule { }
