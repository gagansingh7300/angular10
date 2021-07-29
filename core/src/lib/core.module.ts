import { CoreComponent } from './core.component';
import { DataTableComponent } from './../components/molecules/data-table/data-table.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';

import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [CoreComponent, DataTableComponent],
  imports: [
    A11yModule,
    CdkTableModule,
    MatTableModule,
    MatPseudoCheckboxModule,
    PortalModule,
    ScrollingModule,
  ],
  exports: [CoreComponent, DataTableComponent]
})
export class CoreModule { }
