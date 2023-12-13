import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-first-item',
  templateUrl: './user-list-first-item.component.html',
  styleUrls: ['./user-list-first-item.component.scss'],
})
export class UserListFirstItemComponent implements OnInit {
  @Input() public user!: { name: string; age: number };

  constructor() {}

  ngOnInit(): void {}
}
