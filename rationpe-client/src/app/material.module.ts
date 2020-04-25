import { NgModule } from '@angular/core';

import {
  MdcButtonModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcChipsModule,
  MdcDrawerModule,
  MdcFabModule,
  MdcFormFieldModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcImageListModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcMenuModule,
  MdcMenuSurfaceModule,
  MdcRippleModule,
  MdcSelectModule,
  MdcSnackbarModule,
  MdcTabBarModule,
  MdcTabModule,
  MdcTabScrollerModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
  MDCDataTable,
  MDCDataTableModule,
} from '@angular-mdc/web';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    MdcTopAppBarModule,
    MdcTabModule,
    MdcTabScrollerModule,
    MdcListModule,
    MdcImageListModule,
    MdcCardModule,
    MdcTextFieldModule,
    MdcFormFieldModule,
    MdcRippleModule,
    MdcTypographyModule,
    MdcTabBarModule,
    MdcDrawerModule,
    MdcMenuModule,
    MdcIconButtonModule,
    MdcSnackbarModule,
    MdcTypographyModule,
    MdcLinearProgressModule,
    MdcMenuSurfaceModule,
    MdcSelectModule,
    MdcChipsModule,
    MdcCheckboxModule,
    MDCDataTableModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
