import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, concat } from 'rxjs';
import { RegistrationsActions } from './registrations.actions';
import { RegistrationsService } from '../registrations.service';
import { UsersService } from '../../../../../core/services/users.service';
import { CoursesService } from '../../courses/courses.service';


@Injectable()
export class RegistrationsEffects {

  loadRegistrations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationsActions.loadRegistrations),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.registrationsService.getRegistrations().pipe(
          map(data => RegistrationsActions.loadRegistrationsSuccess({ data })),
          catchError(error => of(RegistrationsActions.loadRegistrationsFailure({ error }))))
      )
    );
  });

  loadAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationsActions.loadAlumnos),
      concatMap(() => 
        this.usersService.getAllAlumnos().pipe(
          map((resp) => RegistrationsActions.loadAlumnosSuccess({ data: resp })),
          catchError((error) => {
            return of(RegistrationsActions.loadAlumnosFailure({ error }));
          })
        )
      )    
    );
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationsActions.loadCourses),
      concatMap(() => {
        return this.coursesService.getCourses().pipe(
          map((resp) => RegistrationsActions.loadCoursesSuccess({ data: resp })),
          catchError((error) => of(RegistrationsActions.loadCoursesFailure({ error })))
        );
      })
    );
  });

  
  createRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationsActions.createRegistration),
      concatMap((action) => {
        return this.registrationsService.createRegistration(action.data).pipe(
          map((resp) => RegistrationsActions.createRegistrationSuccess({data: resp})),
          catchError((error) => of(RegistrationsActions.createRegistrationFailure({ error})))
        )
      })
    )
  });

  createRegistrationSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationsActions.createRegistrationSuccess),
      map(() => RegistrationsActions.loadRegistrations( ))
    )
  })


  constructor(
    private actions$: Actions,
    private registrationsService: RegistrationsService, 
    private usersService: UsersService,
    private coursesService: CoursesService
  ) {}
}
