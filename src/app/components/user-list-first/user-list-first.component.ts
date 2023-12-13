import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { USERS } from 'src/app/app.data';

@Component({
  selector: 'app-user-list-first',
  templateUrl: './user-list-first.component.html',
  styleUrls: ['./user-list-first.component.scss'],
})
export class UserListFirstComponent implements OnInit {
  public stream$: Subject<void> = new Subject();
  public users: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.stream$.subscribe(() => {
      this.users = USERS.map((user) => ({ ...user }));
    });
    this.stream$.next();
  }
}
