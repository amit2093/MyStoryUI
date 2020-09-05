import { Component, HostListener, ViewChild } from '@angular/core';
import { AllGetMethodsService } from 'src/all-get-methods.service';
import { HttpClient } from '@angular/common/http';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'StoryBoard';
  private show = false;
  private numbers = [];
  private Profile_Key = 1;
  private onlineFriends: any;
  private PersonMessageToSee_Key = 2;
  private loggedInUserProfileKey = 1;
  private displaychatBox = 'd-none';
  private floatingChatWindowVisibility = "d-none";
  private isWebCamOpen = false;
  private active_for_chat : number = 0;
  private privateMessageArray: any;
  private chat_with_name = "";

  constructor(private _allGetMethods: AllGetMethodsService,
    private http: HttpClient) {
    // this._allGetMethods.getAllfriendsById(this.Profile_Key).subscribe(
    //   data => { this.onlineFriends = data }
    // );

    this.http.get('./assets/onlineFriends.json').subscribe(data => {
      this.onlineFriends = data;
      this.onlineFriends.forEach(element => {
        if(element.Is_Online){
          this.active_for_chat = this.active_for_chat + 1;
        }
      });
      this.numbers.push(1);
    });

    this.http.get('./assets/privateMessages.json').subscribe(data => {
      this.privateMessageArray = data;
    });
  }

  onShow() {
    document.getElementById("floatingChatWindow").style.zIndex = "10";
    this.show = true;
    document.getElementById("chatPopupWindow").style.zIndex = "101";
  }

  onCloseChatPopup() {
    this.show = false;
  }

  closeOpenChatWindow(){
    this.displaychatBox = 'd-none';
    this.isWebCamOpen = false;
  }

  videoCall(){
    this.isWebCamOpen = true;
    setTimeout(()=>{
      this.isWebCamOpen = !this.isWebCamOpen;
    }, 2000);
  }

  
  openChatBoxPopup(index) {
    this.show = false;
    this.displaychatBox = 'd-block';
    document.getElementById('floatingChatWindow').style.zIndex = "100";
    this.chat_with_name = this.onlineFriends[index].Profile_Name;
    // this._allGetMethods.getMessagaeById(this.onlineFriends[index].Profile_Key,
    //   this.loggedInUserProfileKey).subscribe(
    //     data => { this.privateMessageArray = data; }
    //   );

  }

}
