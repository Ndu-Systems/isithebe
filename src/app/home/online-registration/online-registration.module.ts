

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlineRegistrationRouting } from './online-registration.routing';
import { OnlineRegistrationComponent } from './online-registration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccountService } from '../../services';
import { PageHeaderModule, PrimeNg } from '../../shared';

@NgModule({
    imports: [CommonModule, FormsModule, WavesModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule, OnlineRegistrationRouting, MDBBootstrapModule.forRoot()],
    declarations: [OnlineRegistrationComponent],
    exports: [...PrimeNg],
    providers: [AccountService]
})

export class OnlineRegistrationModule { }
