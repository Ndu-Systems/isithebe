import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './benefits.component';
import { BenefitsRoutes } from './benefits.routing';
import { BenefitsListComponent } from './benefits-list';
import { AddBenefitComponent } from './add-benefit/add-benefit.component';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,BenefitsRoutes, FormsModule,Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
    ReactiveFormsModule, PageHeaderModule,

  ],
  declarations: [BenefitsComponent,BenefitsListComponent,AddBenefitComponent]
})
export class BenefitsModule { }
