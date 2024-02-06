import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {

loading = true;

users: string[] = [];

getUsersSubscription?: Subscription;

  constructor(){

    setTimeout(() => {
      console.log('Timeout!')
    }, 1000 );

    console.log('---FIN---')

    let loading = false;

    // this.getUsersFromObservable()
 }

  getUsersFromObservable(): void {

    this.getUsersSubscription?.unsubscribe();
    this.loading = true
    const getUsers$ = new Observable<string[]>((subscriber) => {
      // setTimeout(() => {
      //   subscriber.next(['Igna', 'Cande', 'Tinbro'])
      // }, 2000);
      setInterval(() => {
        subscriber.next(['Igna', 'Cande', 'Tinbro'])      
      }, 1000)
    })

    this.getUsersSubscription = getUsers$.subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.users = respuesta;
      },
      error: () => {},
      complete: () => {
        this.loading = false;
      } 
    })
  }

  getUsersFromPromise(): void{
    
  this.loading = true  
  const getUsers = new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(['Ignacio', 'Facundo','Candelaria']);
    }, 2000);
  });

    this.loading = true;
    getUsers
    .then((respuesta) => {
      this.users = respuesta;
    })
    .catch((error) => console.error(error))
    .finally(() => {
    this.loading = false;
  });
  }
}
