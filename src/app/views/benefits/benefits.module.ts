import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './benefits.component';
import { BenefitsRoutes } from './benefits.routing';
import { BenefitsListComponent } from './benefits-list';

@NgModule({
  imports: [
    CommonModule,BenefitsRoutes
  ],
  declarations: [BenefitsComponent,BenefitsListComponent]
})
export class BenefitsModule { }
