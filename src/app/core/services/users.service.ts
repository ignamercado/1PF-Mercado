import { Inject, Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

  getUserById(id: number): Observable<User | undefined>{
    // return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000))
    return this.httpClient.get<User>(`${environment.apiURL}/users/${id}`)
  }

  getRoles(): Observable<string[]>{
    return of(ROLES_DB).pipe(delay(1000))
  }

  getUsers(){

    // let headers = new HttpHeaders();

    // headers = headers.append('x-token', localStorage.getItem('token') || '');

    return this.httpClient.get<User[]>(`${environment.apiURL}/users`,{
      // headers: headers,
    }).pipe(
      catchError((error) => {
      return of(error);
    }) 
    );
  }

  createUser(payload: User) {
    return this.httpClient
    .post<User>(`${environment.apiURL}/users`, payload)
    .pipe(mergeMap(() => this.getUsers())
    );
  }

  deleteUser(userID: number){
    // USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    // return this.getUsers().pipe(
    //   tap(() => this.alerts.showSuccess('Realizado','Se eliminó correctamente')));
  
    return this.httpClient
    .delete<User>(`${environment.apiURL}/users/${userID}`)
    .pipe(mergeMap(() => this.getUsers()))
  }
}
