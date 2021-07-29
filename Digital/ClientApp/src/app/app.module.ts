import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: `/platform`,
    }
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  /**
   * ngDoBootstrap module hook
   */
  ngDoBootstrap() {
    console.log("-----ngDoBootstrap------")
    const myCustomElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    if (!customElements.get('gld-platform')) {
      customElements.define('gld-platform', myCustomElement);
    }
  }
}
