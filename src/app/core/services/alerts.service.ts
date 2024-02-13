import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Swal, { SweetAlertOptions } from "sweetalert2";

@Injectable({ providedIn: 'root' })
export class AlertsService {
    private alert$ = new Subject<SweetAlertOptions>();

    constructor(){
        this.alert$.subscribe({
            next:(options) => {
                Swal.fire(options);
            }
        });    
    }

    showError(options: SweetAlertOptions): void {
        this.alert$.next(options);
    }

    showSuccess(title: string, message: string): void {
        this.alert$.next({
            icon: 'success',
            title,
            text: message
        });
    }
}
