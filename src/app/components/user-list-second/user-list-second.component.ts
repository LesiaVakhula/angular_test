import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';
import { USERS } from 'src/app/app.data';

@Component({
  selector: 'app-user-list-second',
  templateUrl: './user-list-second.component.html',
  styleUrls: ['./user-list-second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListSecondComponent implements OnInit {
  public stream$: BehaviorSubject<Array<{ name: string; age: number }>> =
    new BehaviorSubject<Array<{ name: string; age: number }>>([]);
  public users: any[] = [];
  public users$!: Observable<Array<{ name: string; age: number }>>;

  constructor() {}

  public ngOnInit(): void {
    this.stream$.pipe(debounceTime(500)).subscribe((data) => {
      this.users = data.map((user) => ({ ...user })) as {
        name: string;
        age: number;
      }[];
    });
    this.stream$.next(USERS);
  }
}

// Problem: as comment has changeDetection: ChangeDetectionStrategy.OnPush, the view is not updated as the data comes asynchronously.
// 2ways to solve this:
// 1.trigger change detection manually

// constructor(private cd: ChangeDetectorRef) {}
// this.stream$.pipe(debounceTime(500)).subscribe((data) => {
//   this.users = data.map((user) => ({ ...user })) as {
//     name: string;
//     age: number;
//   }[];
//   this.changeDetectorRef.markForCheck();
// });

// 2.use async pipe in template
// public ngOnInit(): void {
//   this.users$ = this.stream$.pipe(
//     debounceTime(500),
//     map((data) => {
//       return data.map((user) => ({ ...user })) as {
//         name: string;
//         age: number;
//       }[];
//     })
//   );
//   this.stream$.next(USERS);
// }
