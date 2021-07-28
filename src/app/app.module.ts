import { LogisticsAppContainerComponent } from './modules/logistics-container/components/logistics-container/logistics-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, DoBootstrap, ApplicationRef, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoadModule } from 'core/src/public-api';
import { LoadScriptJsonService } from 'core/src/lib/load-script-json';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

export function startupServiceFactory(scriptJSON: LoadScriptJsonService) {
  return () =>
    scriptJSON.load(
      environment.platform
    );
}

@NgModule({
  declarations: [
    AppComponent,
    LogisticsAppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScriptLoadModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [LoadScriptJsonService],
      multi: true,
    }
  ]
})
export class AppModule implements DoBootstrap {
  /**
   * ngDoBootstrap method
   */
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // Or some other component
  }
}
