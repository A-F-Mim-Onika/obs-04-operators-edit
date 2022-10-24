import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //actiavtedEmitter =  new EventEmitter<boolean>();
  actiavtedEmitter =  new Subject<boolean>();

  constructor() { }
}
