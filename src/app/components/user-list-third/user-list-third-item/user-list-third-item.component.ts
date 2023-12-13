import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list-third-item',
  templateUrl: './user-list-third-item.component.html',
  styleUrls: ['./user-list-third-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListThirdItemComponent implements OnInit {
  @Input() public user!: { name: string; age: number };

  constructor() {}

  ngOnInit(): void {}
}
