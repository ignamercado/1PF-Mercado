import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { contadorActions } from '../../../../core/store/contador/actions';
import { selectContadorValue } from '../../../../core/store/contador/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clase-16-redux',
  templateUrl: './clase-16-redux.component.html',
  styleUrl: './clase-16-redux.component.scss'
})
export class Clase16ReduxComponent {

  value$: Observable<number>;

  constructor(private store: Store ) {
    this.value$ = this.store.select(selectContadorValue)
  }

  incrementar(): void{
    this.store.dispatch(contadorActions.incrementar())
  }

  decrementar(): void{
    this.store.dispatch(contadorActions.decrementar({ cantidad: 10 }))
  }
}
