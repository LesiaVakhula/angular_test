import { Injectable } from '@angular/core';
import { USERS } from '../app.data';

@Injectable()
export class HelperService {
  public users = USERS;

  constructor() {}
}
