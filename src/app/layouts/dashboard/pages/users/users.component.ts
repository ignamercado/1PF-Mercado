import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role' ];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Ignacio',
      lastName: 'Mercado',
      email: 'ignamercado@gmail.com',
      password: '123456',
      role: 'Admin'
    },
    {
      id: 2,
      firstName: 'Candelaria',
      lastName: 'Cervelli',
      email: 'candecervelli@gmail.com',
      password: '123456',
      role: 'User'
    }
  ];

  onUserSubmitted(ev: User): void {
    this.dataSource = [...this.dataSource, ev];
}


}
