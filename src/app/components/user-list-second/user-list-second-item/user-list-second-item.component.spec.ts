import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSecondItemComponent } from './user-list-second-item.component';

describe('UserListSecondItemComponent', () => {
  let component: UserListSecondItemComponent;
  let fixture: ComponentFixture<UserListSecondItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListSecondItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListSecondItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
