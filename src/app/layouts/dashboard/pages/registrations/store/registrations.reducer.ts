import { createFeature, createReducer, on } from '@ngrx/store';
import { RegistrationsActions } from './registrations.actions';
import { Registration } from '../models';
import { User } from '../../users/models';
import { Course } from '../../courses/models';

export const registrationsFeatureKey = 'registrations';

export interface State {
  registrations: Registration[];
  alumnos: User[];
  courses: Course[],
  loading: boolean;
  loadingAlumnos: boolean,
  error: unknown;

}

export const initialState: State = {
  registrations: [],
  alumnos: [],
  courses: [],
  loading: false,
  loadingAlumnos: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(RegistrationsActions.loadRegistrations, (state) => ({ ...state, loading: true})),
  on(RegistrationsActions.loadRegistrationsSuccess, (state, action) => ({ ...state, loading: false , registrations: action.data })),
  on(RegistrationsActions.loadRegistrationsFailure, (state, action) => ({ ...state, loading: false, error: action.error})),
  on(RegistrationsActions.loadAlumnos, (state) => {
    return {
      ...state,
      loadingAlumnos: true
    }
  }),
  on(RegistrationsActions.loadAlumnosSuccess, (state, action) => {
    return {
      ...state,
      loadingAlumnos: false,
      alumnos: action.data
    }
  }),
  on(RegistrationsActions.loadCoursesSuccess, (state, action) => ({
    ...state,
    courses: action.data
  }))
);

export const registrationsFeature = createFeature({
  name: registrationsFeatureKey,
  reducer,
});

