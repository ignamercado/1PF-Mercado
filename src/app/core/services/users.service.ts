import { Inject, Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, delay, of, tap } from 'rxjs';
import { NotifiersService } from './notifiers.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [
  {
    id: 1,
    firstName: 'Ignacio',
    lastName: 'Mercado',
    email: 'ignamercado@gmail.com',
    password: '123456',
    rol: 'Admin',
    country: 'Argentina',
    occupation: 'Software engineer'
  },
  {
    id: 2,
    firstName: 'Candelaria',
    lastName: 'Cervelli',
    email: 'candecervelli@gmail.com',
    password: '123456',
    rol: 'User',
    country: 'Argentina',
    occupation: 'Web designer'
  },
];

@Injectable()
export class UsersService {
  constructor(private notifiers: NotifiersService) {}

  getUserById(id: number): Observable<User | undefined>{
    return of(USERS_DB.find((user) => user.id == id))
  }

  getRoles(): Observable<string[]>{
    return of(ROLES_DB).pipe(delay(1000))
  }

  getUsers(){
    return of(USERS_DB).pipe(delay(500))
  }

  createUser(payload: User) {
    USERS_DB.push(payload);
    return this.getUsers()
  }

  deleteUser(userID: number){
    USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(tap(() => this.notifiers.showSuccess('Realizado','Se eliminó correctamente')));
  }
}
