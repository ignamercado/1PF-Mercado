import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();
  
  constructor (private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      rol: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      occupation: this.fb.control('', Validators.required),
      
    })
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
        this.userForm.markAllAsTouched();
    } else {
        const newUser = { ...this.userForm.value, id: new Date().getTime() };
        this.userSubmitted.emit(newUser);
        this.userForm.reset();
    }
}


}

