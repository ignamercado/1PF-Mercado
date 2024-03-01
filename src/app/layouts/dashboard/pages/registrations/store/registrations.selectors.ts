import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegistrations from './registrations.reducer';

export const selectRegistrationsState = createFeatureSelector<fromRegistrations.State>(
  fromRegistrations.registrationsFeatureKey
);

export const selectRegistrations = createSelector(selectRegistrationsState, (state) => state.registrations);

export const selectRegistrationsIsLoading = createSelector(selectRegistrationsState, (state) => state.loading);

export const selectRegistrationsAlumnos = createSelector(
  selectRegistrationsState,
  (state) => state.alumnos
);

export const selectRegistrationsCourses = createSelector(
  selectRegistrationsState,
  (state) => state.courses
);