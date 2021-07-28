import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogisticsAppContainerComponent } from './modules/logistics-container/components/logistics-container/logistics-container.component';

const routes: Routes = [
  {
    path: 'platform1',
    component: LogisticsAppContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
