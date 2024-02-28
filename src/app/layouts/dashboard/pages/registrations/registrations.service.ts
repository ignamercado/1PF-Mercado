import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Registration } from "./models";


@Injectable({ providedIn: 'root' })
export class RegistrationsService {
    constructor(private http: HttpClient) {}

    getRegistrations() {
        return this.http.get<Registration[]>(
            'http://localhost:3000/registrations?_embed=user&_embed=course'
            )
    }
}