import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDataComponent } from './user-form-data.component';

describe('UserFormDataComponent', () => {
  let component: UserFormDataComponent;
  let fixture: ComponentFixture<UserFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
