import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-second-item',
  templateUrl: './user-list-second-item.component.html',
  styleUrls: ['./user-list-second-item.component.scss'],
})
export class UserListSecondItemComponent implements OnInit {
  @Input() public user!: { name: string; age: number };

  constructor() {}

  ngOnInit(): void {}
}
