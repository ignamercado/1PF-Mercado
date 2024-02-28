import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { RegistrationsActions } from './registrations.actions';
import { RegistrationsService } from '../registrations.service';
import { UsersService } from '../../../../../core/services/users.service';


@Injectable()
export class RegistrationsEffects {

  loadRegistrationss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationsActions.loadRegistrationss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.registrationsService.getRegistrations().pipe(
          map(data => RegistrationsActions.loadRegistrationssSuccess({ data })),
          catchError(error => of(RegistrationsActions.loadRegistrationssFailure({ error }))))
      )
    );
  });

// FUNCION IGUAL AL PROFE PERO NO FUNCIONA

  // loadAlumno$ = createEffect(() => {
  //   return this.actions$.pipe(ofType(RegistrationsActions.loadAlumnos),
  //     concatMap(() => this.usersService.getAllAlumnos())    
  //   )
  // })


  constructor(private actions$: Actions, private registrationsService: RegistrationsService, private usersService: UsersService) {}
}
