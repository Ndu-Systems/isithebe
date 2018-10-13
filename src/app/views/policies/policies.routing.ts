import { PoliciesComponent } from './policies.component';
import { AddPolicyComponent } from './add-policy';
import { ListPoliciesComponent } from './list-policies/list-policies.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:'', component:ListPoliciesComponent },
  { path:'add-policy', component:AddPolicyComponent },
];
export const declarations =[PoliciesComponent,ListPoliciesComponent,AddPolicyComponent]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoliciesRoutes{
  
}
