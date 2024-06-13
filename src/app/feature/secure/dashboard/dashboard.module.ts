import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    SecureSharedModule,
    PaginatorModule,
    TableModule
  ],
})
export class DashboardModule { }
