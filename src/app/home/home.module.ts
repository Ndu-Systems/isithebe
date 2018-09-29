import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { PageHeaderModule, PrimeNg } from '../shared';
  

@NgModule({
    imports: [CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule, HomeRouting],
    declarations: [HomeComponent],
    exports: [...PrimeNg],
    providers: [ ]
})

export class HomeModule {}