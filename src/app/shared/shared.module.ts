import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { PipesModule } from '../layouts/dashboard/pages/pipes/pipes.module';
import { ResaltadoDirective } from './resaltado.directive';
import { SizeTextDirective } from './size-text.directive';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    SizeTextDirective,
    ValidationErrorsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    SizeTextDirective,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    ValidationErrorsPipe,
    MatPaginatorModule,
    MatSelectModule


  ]
})
export class SharedModule { }
