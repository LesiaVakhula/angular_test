import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSecondComponent } from './user-list-second.component';

describe('UserListSecondComponent', () => {
  let component: UserListSecondComponent;
  let fixture: ComponentFixture<UserListSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
