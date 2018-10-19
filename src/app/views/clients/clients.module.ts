import { AddPolicyholderComponent } from './add-policyholder/add-policyholder.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ConfirmationService } from 'primeng/api';
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
    path: 'edit/:id', component:EditClientComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageHeaderModule,
    CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule
  ],
  exports: [RouterModule,...PrimeNg],
  declarations: [ViewClientsComponent, AddClientComponent,ViewClientComponent,EditClientComponent,AddPolicyholderComponent],
  providers:[ConfirmationService]
})
export class ClientsModule { }
