import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateRegistrationData, Registration } from '../models';
import { User } from '../../users/models';
import { Course } from '../../courses/models';

export const RegistrationsActions = createActionGroup({
  source: 'Registrations',
  events: {
    'Load Registrations': emptyProps(),
    'Load Registrations Success': props<{ data: Registration[] }>(),
    'Load Registrations Failure': props<{ error: unknown }>(),
    'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data: User[] }>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),    
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),
    'Create Registration': props<{ data: CreateRegistrationData }>(),
    'Create Registration Success': props<{ data: Registration }>(),
    'Create Registration Failure': props<{ error: unknown }>(),
  }
});


