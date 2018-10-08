import { IndexComponent } from './index.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PrimeNg, PageHeaderModule } from '../../shared';
import { NavBarComponent } from '../nav-bar';
import { IndexRouting } from './index.routing';




@NgModule({
    imports: [CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule, IndexRouting, MDBBootstrapModule.forRoot()],
    declarations: [IndexComponent],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [...PrimeNg],
    providers: []
})


export class IndexModule {
}
