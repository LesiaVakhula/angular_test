import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFirstItemComponent } from './user-list-first-item.component';

describe('UserListFirstItemComponent', () => {
  let component: UserListFirstItemComponent;
  let fixture: ComponentFixture<UserListFirstItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListFirstItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFirstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
