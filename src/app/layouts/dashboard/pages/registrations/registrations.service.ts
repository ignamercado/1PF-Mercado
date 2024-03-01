import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateRegistrationData, Registration } from "./models";
import { catchError, concatMap, throwError } from "rxjs";
import { User } from '../users/models';

@Injectable({ providedIn: 'root' })
export class RegistrationsService {
    constructor(private http: HttpClient) {}

    getRegistrations() {
        return this.http.get<Registration[]>(
            'http://localhost:3000/registrations?_embed=user&_embed=course'
            )
    }

    getRegistrationsById(userId: string | number) {
        return this.http
        .get<User>(`http://localhost:3000/users/${userId}`)
        .pipe(
            concatMap((user) =>
                this.http.get(`http://localhost:3000/registrations?userId=${user.id}`)
            ),
            catchError((error) => {
                alert('Ocurrió un error')
                return throwError(() => error);
            })
        );
    }

    createRegistration(data: CreateRegistrationData) {
        return this.http.post<Registration>(`http://localhost:3000/registrations`, data)
    }
    
}