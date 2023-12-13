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

// Problem:  encapsulation is set to ViewEncapsulation.None, it can lead to issue with overwriting styles.
// Solution: set encapsulation to ViewEncapsulation.Emulated or just remove option 'encapsulation: ViewEncapsulation.None'.
