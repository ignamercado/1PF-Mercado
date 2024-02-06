import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Clase7';

  isLoading = false;

  
  constructor(private loadingService: LoadingService){
    this.loadingService.isLoading$.subscribe({
      next: (v) => {
       setTimeout(() => {
         this.isLoading = v;
        
       });
      },
    });
  //   this.loadingService.isLoading$.subscribe({
  //     next: (value) => (
  //       this.isLoading = value)
  //   });
  }
}
