import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FeedToHomeService {

  private oneFeedData = new BehaviorSubject<any>({});
  private friendNameData = new BehaviorSubject<any>({});

  oneFeed = this.oneFeedData.asObservable();
  friendName = this.friendNameData.asObservable();

  constructor() { }

  passFeedToHome(oneFeed){
    this.oneFeedData.next(oneFeed);
  }
  

  goToFriendProfile(friendName){
    this.friendNameData.next({"userName":friendName});
  }
}
