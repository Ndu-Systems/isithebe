import { AddBenefityToPolicyComponent } from './add-benefity-to-policy/add-benefity-to-policy.component';
import { PoliciesComponent } from './policies.component';
import { AddPolicyComponent } from './add-policy';
import { ListPoliciesComponent } from './list-policies/list-policies.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewPolicyComponent } from './view-policy/view-policy.component';

const routes: Routes = [
  { path:'', component:ListPoliciesComponent },
  { path:'add', component:AddPolicyComponent },
  { path:'view', component:ViewPolicyComponent },
  { path:'add-benefits', component:AddBenefityToPolicyComponent },
];
export const declarations =[PoliciesComponent,ListPoliciesComponent,AddPolicyComponent,ViewPolicyComponent,AddBenefityToPolicyComponent]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoliciesRoutes{
  
}
