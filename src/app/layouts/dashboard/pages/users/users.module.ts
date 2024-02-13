import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
// ENVOLTURA DE INPUT
import {MatFormFieldModule} from '@angular/material/form-field';
// INPUT
import {MatInputModule} from '@angular/material/input';
// SELECT
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../../../core/services/users.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './user-routing.module';




@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
    RouterModule,
    UsersRoutingModule


  ],
  exports: [UsersComponent],
  providers: [UsersService,
  {
    provide: 'USER_TOKEN',
    useValue: 'Token recibido para funcionar'
  }],
})
export class UsersModule { }
