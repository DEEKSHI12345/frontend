import { NgModule } from '@angular/core';
import { NgIdleModule } from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureLayoutModule } from './secure-layout/secure-layout.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';

@NgModule({
  declarations: [
    SecureComponent
  ],
  imports: [
    SharedModule,
    SecureRoutingModule,
    SecureLayoutModule,
    NgIdleModule,
    NgIdleKeepaliveModule
  ]
})
export class SecureModule { }
