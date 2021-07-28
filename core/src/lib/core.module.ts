import { CoreComponent } from './core.component';
import { DataTableComponent } from './../components/molecules/data-table/data-table.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';

import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';


@NgModule({
  declarations: [CoreComponent, DataTableComponent],
  imports: [
    MatTableModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatPseudoCheckboxModule,
    MatGridListModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  exports: [CoreComponent, DataTableComponent]
})
export class CoreModule { }
