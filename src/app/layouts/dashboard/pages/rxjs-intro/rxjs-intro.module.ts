import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsIntroComponent } from './rxjs-intro.component';
import { RxjsExampleComponent } from '../rxjs-example/rxjs-example.component';



@NgModule({
  declarations: [
    RxjsIntroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RxjsIntroComponent]
})
export class RxjsIntroModule { }
