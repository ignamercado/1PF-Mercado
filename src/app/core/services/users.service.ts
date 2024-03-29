import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pagination } from '../models/pagination';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

   generateString(length: number) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
  
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

  paginate(page: number, perPage = 5){
    return this.httpClient.get<Pagination<User>>(`${environment.apiURL}/users?_page=${page}&_per_page=${perPage}`)
  }

  createUser(payload: User) {
    return this.httpClient
    .post<User>(`${environment.apiURL}/users`, {
      ...payload,
      token: this.generateString(15)})
    .pipe(mergeMap(() => this.getUsers())
    );
  }

  deleteUser(userID: number) {
    return this.httpClient
      .delete<User>(`${environment.apiURL}/users/${userID}`)
      .pipe(mergeMap(() => this.getUsers()));
  }

  getAllAlumnos(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'http://localhost:3000/users?rol=ALUMNO');
  }
}
