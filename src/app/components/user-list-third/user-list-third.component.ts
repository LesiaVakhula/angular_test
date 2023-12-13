import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/app.data';

@Component({
  selector: 'app-user-list-third',
  templateUrl: './user-list-third.component.html',
  styleUrls: ['./user-list-third.component.scss'],
})
export class UserListThirdComponent implements OnInit {
  public users = USERS.map((user) => ({ ...user }));

  constructor() {}

  ngOnInit(): void {}
}
