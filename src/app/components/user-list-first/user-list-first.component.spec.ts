import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFirstComponent } from './user-list-first.component';

describe('UserListFirstComponent', () => {
  let component: UserListFirstComponent;
  let fixture: ComponentFixture<UserListFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
