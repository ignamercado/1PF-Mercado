import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'rol', 'country', 'occupation', 'actions'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Ignacio',
      lastName: 'Mercado',
      email: 'ignamercado@gmail.com',
      password: '123456',
      rol: 'Admin',
      country: 'Argentina',
      occupation: 'Software engineer'
    },
    {
      id: 2,
      firstName: 'Candelaria',
      lastName: 'Cervelli',
      email: 'candecervelli@gmail.com',
      password: '123456',
      rol: 'User',
      country: 'Argentina',
      occupation: 'Web designer'
    }
  ];

  onUserSubmitted(ev: User): void {
    this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
}

  deleteUser(userId: number): void {
  this.dataSource = this.dataSource.filter(user => user.id !== userId);
}

}
