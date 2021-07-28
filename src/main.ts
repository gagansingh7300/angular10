// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
import { enableProdMode, getPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let window;
console.log("----main.ts------")
if (environment.production && window && window.prodModeEnabled === undefined) {
  enableProdMode();
  window.prodModeEnabled = true;
} else {
  window.prodModeEnabled = false;
}

// If there is already a platform, reuse it, otherwise create a new one
(getPlatform() || platformBrowserDynamic())
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
