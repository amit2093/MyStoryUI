import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AllGetMethodsService {

  private BASE_URL = 'https://localhost:8085';
  constructor(private http: HttpClient) { }

  getAllfriendsById(Profile_Key): Observable<any> {
    return this.http.get(this.BASE_URL+'/getAllFriends/'+Profile_Key);
  }

  // getAllProfileForSearch(): Observable<any> {
  //   return this.http.get(this.BASE_URL+'/getAllProfiles');
  // }

  getAllProfileForSearch(): Observable<any> {
    return this.http.get('./assets/search.json');
  }

  getProfileById(Profile_Key): Observable<any> {
    return this.http.get(this.BASE_URL+'/getProfile/'+Profile_Key);
  }

  getAllChats(): Observable<any> {
    return this.http.get(this.BASE_URL+'/Chats');
  }

  getMessagaeById(PersonMessageToSee_Key, loggedInUserProfileKey): Observable<any> {
    return this.http.get(this.BASE_URL+'/GetMessage/'+ 
                  PersonMessageToSee_Key+'/'+
                  loggedInUserProfileKey );
  }
  
  getAllOnlineFriends(loggedInUserProfileKey): Observable<any> {
    return this.http.get(this.BASE_URL+'/getAllOnlineFriends/'+loggedInUserProfileKey);
  }

  getAllFeeds(): Observable<any> {
    return this.http.get(this.BASE_URL+'/getAllFeeds');
  }
    
  getAllCommentsByFeedKey(feedKey): Observable<any> {
    return this.http.get(this.BASE_URL+'/getAllComments/'+feedKey);
  }

  getAllFeedsByProfileKey(Profile_Key): Observable<any> {
    return this.http.get(this.BASE_URL+'/getAllFeedsByProfileKey/'+Profile_Key);
  }

  getFeedDetailsByFeedKey(feedKey): Observable<any> {
    return this.http.get(this.BASE_URL+'/getFeed/'+feedKey);
  }

  getLatestStories(page: number = 1) {
    return this.http.get('https://pokeapi.co/api/v2/ability/4/');
  }



  // THIRD_PARTY_API_FOR_TEST(): Observable<any> {
  //   let headers = new HttpHeaders().append('Access-Control-Allow-Origin', 'http://localhost:4200');
  //   headers = headers.append("Access-Control-Allow-Headers",  "accept, Content-Type, X-Custom-Header");
  //   headers = headers.append("Access-Control-Allow-Methods",  "GET,PUT,POST,DELETE,OPTIONS");
  //   return this.http.get('https://deckofcardsapi.com/api/deck/new/draw/?count=10', { headers: headers });
  // }
  // let headers = new HttpHeaders().set('Access-Control-Allow-Headers', '*');
  //   headers = headers.set("Content-Type",  "application/json; charset=UTF-8");

  //   return this.http.get('https://pokeapi.salestock.net/api/v2/pokemon/', { headers: headers });
}
