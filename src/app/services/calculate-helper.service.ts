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

// This service is not singleton as it is provided twice: directly in providers section in lazy.module.ts and
// in root module by adding providedIn: 'root' to service decorator
// @Injectable({
//   providedIn: 'root',
// })
//
// in the example main component and lazy component show random value that is generated when service is created
// click on button 'GO TO MAIN COMPONENT' and then click on button 'GO TO LAZY COMPONENT' and you will see that random value is different
// to fix it need to remove service from providers section in lazy.module.ts
