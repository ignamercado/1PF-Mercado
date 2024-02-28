import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Registration } from '../models';
import { User } from '../../users/models';

export const RegistrationsActions = createActionGroup({
  source: 'Registrations',
  events: {
    'Load Registrationss': emptyProps(),
    'Load Registrationss Success': props<{ data: Registration[] }>(),
    'Load Registrationss Failure': props<{ error: unknown }>(),
    'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data: User[] }>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),
  }
});
