import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent, EnterEmailComponent } from './forgot-password';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'enter-email',
        component: EnterEmailComponent
    }
];

export const declarations = [LoginComponent, ForgotPasswordComponent, EnterEmailComponent];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
