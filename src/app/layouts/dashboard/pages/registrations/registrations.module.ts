import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegistrationsComponent } from './registrations.component';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationsEffects } from './store/registrations.effects';
import { StoreModule } from '@ngrx/store';
import { registrationsFeature } from './store/registrations.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { RegistrationDialogComponent } from './components/registration-dialog/registration-dialog.component';



@NgModule({
  declarations: [
    RegistrationsComponent,
    RegistrationDialogComponent
  ],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    SharedModule,
    StoreModule.forFeature(registrationsFeature),
    EffectsModule.forFeature([RegistrationsEffects]),
  ]
})
export class RegistrationsModule { }
