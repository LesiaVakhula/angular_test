import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-data',
  templateUrl: './user-form-data.component.html',
  styleUrls: ['./user-form-data.component.scss'],
})
export class UserFormDataComponent implements OnInit {
  public firstName: FormControl = new FormControl('User');
  public lastName: FormControl = new FormControl('Test');
  public city: FormControl = new FormControl('London');
  public country: FormControl = new FormControl('UK');

  constructor() {}

  public ngOnInit(): void {}

  public reset(): void {
    this.firstName.reset();
    this.lastName.reset();
    this.city.reset();
    this.country.reset();
  }
  public setInitial(): void {
    this.firstName.reset('John');
    this.lastName.reset('Johnson');
    this.city.reset('Tel Aviv');
    this.country.reset('Israel');
  }
}

// Problem: no problem only way of form controls implementation, it ts better to use Form builder that create from group with controls.
// Form can be updated or reset by calling one method 'reset', 'setValue' or 'patchValue'.

// Need to set change detection strategy to OnPush.
