import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListThirdComponent } from './user-list-third.component';

describe('UserListThirdComponent', () => {
  let component: UserListThirdComponent;
  let fixture: ComponentFixture<UserListThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
