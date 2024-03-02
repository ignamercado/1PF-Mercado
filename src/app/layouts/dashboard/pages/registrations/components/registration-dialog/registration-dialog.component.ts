import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from '../../store/registrations.actions';
import { Observable } from 'rxjs';
import { selectRegistrationsAlumnos, selectRegistrationsCourses } from '../../store/registrations.selectors';
import { User } from '../../../users/models';
import { Course } from '../../../courses/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrl: './registration-dialog.component.scss'
})
export class RegistrationDialogComponent {
  alumnos$: Observable<User[]>;
  courses$: Observable<Course[]>;

  registrationForm: FormGroup;

  constructor(
    private store: Store, 
    private formBuilder: FormBuilder, 
    private matDialogRef: MatDialogRef<RegistrationDialogComponent>
    ) {

      // constructor(private fb: FormBuilder, private authService: AuthService) {
      //   this.loginForm = this.fb.group({
      //     email: this.fb.control('', [Validators.email, Validators.required]),
      //     password: this.fb.control('', [Validators.required]),
      //   })
      // }

    this.registrationForm = this.formBuilder.group({
      courseId: this.formBuilder.control('', [Validators.required]),
      userId: this.formBuilder.control('', [Validators.required]),
    })

    this.store.dispatch(RegistrationsActions.loadAlumnos());
    this.store.dispatch(RegistrationsActions.loadCourses());

    this.courses$ = this.store.select(selectRegistrationsCourses);
    this.alumnos$ = this.store.select(selectRegistrationsAlumnos);
  }

  onSubmit(): void {;
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        RegistrationsActions.createRegistration({ data: this.registrationForm.value})
      );
      this.matDialogRef.close()
    }
  }
}
