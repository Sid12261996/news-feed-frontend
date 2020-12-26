import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, horizontalPosition: 'center', verticalPosition: 'top'}}],
  exports: [MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule]
})
export class MaterialDesignModule {
}
