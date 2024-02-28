import { createFeature, createReducer, on } from '@ngrx/store';
import { RegistrationsActions } from './registrations.actions';
import { Registration } from '../models';

export const registrationsFeatureKey = 'registrations';

export interface State {
  registrations: Registration[];
  loading: boolean;
  error: unknown;

}

export const initialState: State = {
  registrations: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(RegistrationsActions.loadRegistrationss, (state) => ({ ...state, loading: true})),
  on(RegistrationsActions.loadRegistrationssSuccess, (state, action) => ({ ...state, loading: false , registrations: action.data })),
  on(RegistrationsActions.loadRegistrationssFailure, (state, action) => ({ ...state, loading: false, error: action.error})),
);

export const registrationsFeature = createFeature({
  name: registrationsFeatureKey,
  reducer,
});

