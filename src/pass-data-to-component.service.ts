import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataToComponentService {

  private profileToGo = new BehaviorSubject<any>({});

  profileToGoKey = this.profileToGo.asObservable();
  
  constructor() { }

  profileToGoMethod(profileToGoKey){
    this.profileToGo.next(profileToGoKey);
  }
  
}
