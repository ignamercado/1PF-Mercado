import { Inject, Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

  getUserById(id: number): Observable<User | undefined>{
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000))
  }

  getRoles(): Observable<string[]>{
    return of(ROLES_DB).pipe(delay(1000))
  }

  getUsers(){
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  createUser(payload: User) {
    USERS_DB.push(payload);
    return this.getUsers()
  }

  deleteUser(userID: number){
    USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(tap(() => this.alerts.showSuccess('Realizado','Se eliminó correctamente')));
  }
}
