import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: '../layout/dashboard/dashboard.module#DashboardModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'policies', loadChildren: './policies/policies.module#PoliciesModule' },
            { path: 'benefits', loadChildren: './benefits/benefits.module#BenefitsModule' },
            { path: 'callbacks', loadChildren: './callbacks/callbacks.module#CallbacksModule' },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }
