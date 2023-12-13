import { Injectable } from '@angular/core';
import { USERS } from '../app.data';

@Injectable()
export class HelperService {
  public users = USERS;

  constructor() {}
}

//Problem: as service is provided directly in app.module.ts it be added to the bundle even if no one use this service (our case), to make this service tree-shakable we need to add  providedIn: 'root'.
// Solution: add providedIn: 'root' to service decorator
// @Injectable({
//   providedIn: 'root'
// })
