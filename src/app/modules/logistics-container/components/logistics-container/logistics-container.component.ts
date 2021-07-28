// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
// Logistics Container

import { Component } from '@angular/core';
import load from 'core/src/utils/loadScript';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-logistics-container',
  templateUrl: './logistics-container.component.html',
  styleUrls: ['./logistics-container.component.scss'],
})
export class LogisticsAppContainerComponent {
  constructor() {
    load([
      {
        app: environment.platform,
        isProduction: false,
        files: ['main'],
      },
    ]);
  }
}
