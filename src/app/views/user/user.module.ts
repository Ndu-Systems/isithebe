import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRouting, declarations } from './user.routing';
 import { UserService } from '../../services/user';
import { AccountService } from '../../services/account';


@NgModule({
    imports: [CommonModule, FormsModule, UserRouting, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule],
    declarations: [...declarations],
    exports: [...PrimeNg],
    providers: [UserService, AccountService]
})
export class UserModule {}
