import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListThirdItemComponent } from './user-list-third-item.component';

describe('UserListThirdItemComponent', () => {
  let component: UserListThirdItemComponent;
  let fixture: ComponentFixture<UserListThirdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListThirdItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListThirdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
