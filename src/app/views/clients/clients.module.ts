import { AddClientBenefitiaryComponent } from './add-client-benefitiary/add-client-benefitiary.component';
import { PolicyBenefisListComponent } from './add-policyholder/policy-benefis-list/policy-benefis-list.component';
import { AddPolicyholderComponent } from './add-policyholder/add-policyholder.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderModule, PrimeNg, SpinnerModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ConfirmationService } from 'primeng/api';
import { BeneficiariesComponent } from './client-beneficiaries-list/beneficiaries.component';
import { ClientPrintDetailsComponent } from './client-print-details';
import { EditClientBeneficiaryComponent } from './edit-client-beneficiary/edit-client-beneficiary.component';
const routes: Routes = [
  {
      path: '',
      component: ViewClientsComponent,
  },
  {
    path: 'add', component:AddClientComponent
  },{
    path: 'view', component:ViewClientComponent
  },
  {
    path: 'add-policyholder', component:AddPolicyholderComponent
  },
  {
    path: 'add-client-beneficiary', component:AddClientBenefitiaryComponent
  },
  {
    path: 'edit-client-beneficiary', component:EditClientBeneficiaryComponent
  },
  {
    path: 'edit/:id', component:EditClientComponent
  },
  {
    path:'print-details', component:ClientPrintDetailsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule.forChild(routes),
    PageHeaderModule,
    CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule
  ],
  exports: [RouterModule,...PrimeNg],
  declarations: [EditClientBeneficiaryComponent,ViewClientsComponent,BeneficiariesComponent,AddClientBenefitiaryComponent,PolicyBenefisListComponent, AddClientComponent,ViewClientComponent,EditClientComponent,AddPolicyholderComponent,ClientPrintDetailsComponent],
  providers:[ConfirmationService]
})
export class ClientsModule { }
