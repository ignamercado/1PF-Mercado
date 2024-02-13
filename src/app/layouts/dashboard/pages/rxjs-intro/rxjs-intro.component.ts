import { Component } from '@angular/core';
import { Observable, Subject, Subscriber, filter } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs-intro',
  templateUrl: './rxjs-intro.component.html',
  styles: ``
})
export class RxjsIntroComponent {
  numbersObservable$ = new Observable ((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
  })

  numbersSubject$ = new Subject()
  
  constructor(private loadingService: LoadingService, private alertsService: AlertsService){
    // this.subscribeToNumbersObservable();

    // this.subscribeToNumbersSubject();
    this.numbersSubject$.next(1);
    this.numbersSubject$.next(2);
    this.numbersSubject$.next(3);

    this.getUsuarios();
  }

  subscribeToNumbersSubject(): void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('NUMEROS SUBJECT:', numbers),
    })
  }
  
  subscribeToNumbersObservable(): void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('NUMEROS OBSERVABLE:', numbers),
    });
  }

  getUsuarios(): void {
    const obs = new Observable<string[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next([]);
        subscriber.next(['Tomas', 'Luis', 'Nora']);
        subscriber.complete()
      }, 2000);
    });

    this.loadingService.setIsLoading(true);
    obs.pipe(
      filter((data) => !!data.length)
    ).subscribe({
      next:  (usuarios) => {
        this.alertsService.showSuccess('Realizado','Los usuarios han sido cargados')
      },
      
      complete: () => {
        this.loadingService.setIsLoading(false)
      }
    });
  }
}
