import { DatePipe } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from '@core/components/app/app.component';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { setAppInjector } from './core/services/app-injector.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
