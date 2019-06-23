import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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

  constructor(
    private service: UserService
  ) { }
  users: User[];

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    });
  }

}

