import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { PipesModule } from '../layouts/dashboard/pages/pipes/pipes.module';
import { ResaltadoDirective } from './resaltado.directive';
import { SizeTextDirective } from './size-text.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    SizeTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    SizeTextDirective
  ]
})
export class SharedModule { }
