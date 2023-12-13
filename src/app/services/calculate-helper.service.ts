import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateHelperService {
  public randomValue!: number;

  constructor() {
    this.randomValue = Math.random();
  }
}
