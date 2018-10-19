import { BenefitsListComponent } from './benefits-list/benefits-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BenefitsComponent } from './benefits.component';
import { AddBenefitComponent } from './add-benefit/add-benefit.component';

const routes: Routes = [
  { path:'', component:BenefitsListComponent },
  { path:'add', component:AddBenefitComponent }
];

export const declarations =[BenefitsComponent,BenefitsListComponent,AddBenefitComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class BenefitsRoutes {

}
