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
            { path: 'user', loadChildren: './user/user.module#UserModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }
