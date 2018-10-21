import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsRoutes, declarations } from './benefits.routing';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,BenefitsRoutes, FormsModule,Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
    ReactiveFormsModule, PageHeaderModule,

  ],
  declarations: [...declarations],
  providers:[ConfirmationService]
})
export class BenefitsModule { }
