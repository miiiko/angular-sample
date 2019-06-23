import { Component, OnInit } from '@angular/core';

export class User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }
  users: User[];

  ngOnInit() {
    this.users = [
      { id: 1, name: 'Yamada', email: 'yamada@example.com' },
      { id: 2, name: 'Suzuki', email: 'suzuki@example.com' },
      { id: 3, name: 'Tanaka', email: 'tanaka@example.com' },
    ];
  }

}

