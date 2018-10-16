import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './benefits.component';
import { BenefitsRoutes } from './benefits.routing';
import { BenefitsListComponent } from './benefits-list';
import { AddBenefitComponent } from './add-benefit/add-benefit.component';

@NgModule({
  imports: [
    CommonModule,BenefitsRoutes
  ],
  declarations: [BenefitsComponent,BenefitsListComponent,AddBenefitComponent]
})
export class BenefitsModule { }
