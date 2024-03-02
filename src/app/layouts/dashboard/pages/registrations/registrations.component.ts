import { Component } from '@angular/core';
import { RegistrationsService } from './registrations.service';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from './store/registrations.actions';
import { selectRegistrations, selectRegistrationsIsLoading } from './store/registrations.selectors';
import { Observable } from 'rxjs';
import { Registration } from './models';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from './components/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent {
  registrations$: Observable<Registration[]>;
  isLoading$: Observable<boolean>;

  columnas: string[] = ['nombreAlumno', 'apellidoAlumno', 'cursoId'];
  dataSource: Registration[] = [];




  constructor (private store: Store, private matDialog: MatDialog) {
    this.registrations$ = this.store.select(selectRegistrations);
    this.isLoading$ = this.store.select(selectRegistrationsIsLoading)
    this.store.dispatch(RegistrationsActions.loadRegistrations())

    this.registrations$.subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log(this.dataSource)
      }
    })

  
  }

  createRegistration():void {
    this.matDialog.open(RegistrationDialogComponent)
  }
}
