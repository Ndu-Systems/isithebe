import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutes, declarations } from './policies.routing';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,PoliciesRoutes,  FormsModule,Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
    ReactiveFormsModule, PageHeaderModule,

  ],
  declarations: [...declarations]
})
export class PoliciesModule { }