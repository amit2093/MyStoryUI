import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { FeedToHomeService } from 'src/feed-to-home-service.service';
import { AllGetMethodsService } from 'src/all-get-methods.service';
import { PassDataToComponentService } from 'src/pass-data-to-component.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public oneFeed: Array<any>;
  public allFeeds: any;
  public otherImages = [];
  public mainImage: string;
  public comments: any = [];
  public oneFeedData = [];
  public allCommentsByFeedKey: Array<any> = [{"comment_Key":1,"comment_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Amit Saxena","work":"Hexaware Tech Ltd","joined_Date":"2019-01-05T13:27:35.000+0000","friends_Count":350,"profile_Key":1,"relationship_Status":"In a Relationship","profile_Image_Url":"https://avatars0.githubusercontent.com/u/18455699?s=460&v=4","profile_Cover_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","total_Requests":5},"comment_Body":"1st Comment","comment_On":{"feed_Key":2,"total_Likes":144,"total_Views":542,"feed_Title":"Feed Title 2","feed_Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","feed_Upload_Date":"2019-01-05T14:18:05.000+0000","feed_Uploaded_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Manoj Soni","work":"Digital Harbour INC","joined_Date":"2019-01-05T14:16:55.000+0000","friends_Count":350,"profile_Key":2,"relationship_Status":"In a Relationship","profile_Image_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","profile_Cover_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","total_Requests":5},"is_Feed_Deleted":false,"image_Of_Feed_Key":[{"image_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","image_Key":4,"image_Of_Feed_Key":2}]},"comment_Date":"2019-01-05T14:18:09.000+0000","has_Replies":false,"is_Comment_Deleted":false,"comment_Reply":[{"reply_Date":"2019-01-05T13:48:28.000+0000","reply_Key":2,"reply_Body":"2nd Reply","reply_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name": "Manoj Soni","work":"Digital Harbour INC","joined_Date":"2019-01-05T14:16:55.000+0000","friends_Count":350,"profile_Key":2,"relationship_Status":"In a Relationship","profile_Image_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","profile_Cover_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","total_Requests":5},"is_Reply_Deleted":false,"reply_On_Comment_Key":1},{"reply_Date":"2019-01-05T13:45:44.000+0000","reply_Key":1,"reply_Body":"1st Reply","reply_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Manoj Soni","work":"Digital Harbour INC","joined_Date":"2019-01-05T14:16:55.000+0000","friends_Count":350,"profile_Key":2,"relationship_Status":"In a Relationship","profile_Image_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","profile_Cover_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","total_Requests":5},"is_Reply_Deleted":false,"reply_On_Comment_Key":1},{"reply_Date":"2019-01-05T14:18:12.000+0000","reply_Key":3,"reply_Body":"3rd Reply","reply_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Amit Saxena","work":"Hexaware Tech Ltd","joined_Date":"2019-01-05T13:27:35.000+0000","friends_Count":350,"profile_Key":1,"relationship_Status":"In a Relationship","profile_Image_Url":"https://avatars0.githubusercontent.com/u/18455699?s=460&v=4","profile_Cover_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","total_Requests":5},"is_Reply_Deleted":false,"reply_On_Comment_Key":1}]},{"comment_Key":2,"comment_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Manoj Soni","work":"Digital Harbour INC","joined_Date":"2019-01-05T14:16:55.000+0000","friends_Count":350,"profile_Key":2,"relationship_Status":"In a Relationship","profile_Image_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","profile_Cover_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","total_Requests":5},"comment_Body":"2nd Comment","comment_On":{"feed_Key":2,"total_Likes":144,"total_Views":542,"feed_Title":"Feed Title 2","feed_Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","feed_Upload_Date":"2019-01-05T14:18:05.000+0000","feed_Uploaded_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Manoj Soni","work":"Digital Harbour INC","joined_Date":"2019-01-05T14:16:55.000+0000","friends_Count":350,"profile_Key":2,"relationship_Status":"In a Relationship","profile_Image_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","profile_Cover_Url":"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","total_Requests":5},"is_Feed_Deleted":false,"image_Of_Feed_Key":[{"image_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","image_Key":4,"image_Of_Feed_Key":2}]},"comment_Date":"2019-01-05T14:22:54.000+0000","has_Replies":false,"is_Comment_Deleted":false,"comment_Reply":[{"reply_Date":"2019-01-05T14:22:56.000+0000","reply_Key":4,"reply_Body":"4st Reply","reply_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Amit Saxena","work":"Hexaware Tech Ltd","joined_Date":"2019-01-05T13:27:35.000+0000","friends_Count":350,"profile_Key":1,"relationship_Status":"In a Relationship","profile_Image_Url":"https://avatars0.githubusercontent.com/u/18455699?s=460&v=4","profile_Cover_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","total_Requests":5},"is_Reply_Deleted":false,"reply_On_Comment_Key":2},{"reply_Date":"2019-01-05T14:32:16.000+0000","reply_Key":5,"reply_Body":"5th Reply","reply_By":{"email":"er.amit1493@gmail.com","is_Online":true,"profile_Name":"Amit Saxena","work":"Hexaware Tech Ltd","joined_Date":"2019-01-05T13:27:35.000+0000","friends_Count":350,"profile_Key":1,"relationship_Status":"In a Relationship","profile_Image_Url":"https://avatars0.githubusercontent.com/u/18455699?s=460&v=4","profile_Cover_Url":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-820836428-920x584.jpg","total_Requests":5},"is_Reply_Deleted":false,"reply_On_Comment_Key":2}]}];
  public tags: any = ["Niket Pandey", "Himanshu Vishwakarma", "Nikki"];
  public feedKey: Number;

  constructor(private http: HttpClient,
    private router: Router,
    private feedService: FeedToHomeService,
    private _allGetMethods: AllGetMethodsService,
    private _passDataToComponent: PassDataToComponentService) {
    document.getElementById("main").style.marginLeft = "0px";
  }

  ngOnInit() {
    this.feedService.oneFeed.subscribe(data => {
      this.oneFeed = data;
      this.mainImage = data[0].image_Of_Feed_Key[0].image_Url;

      // this._allGetMethods.getAllCommentsByFeedKey(this.oneFeed[0].feed_Key).subscribe(data => {
      //   this.allCommentsByFeedKey = data;
      // });

      // this._allGetMethods.getAllFeeds().subscribe(
      //   data => { this.allFeeds = data; }
      // );
    });
    this.http.get('./assets/similarStory.json').subscribe(data => { 
      this.allFeeds = data;
    })
  }

  createPost(input) {
    let post: any = { title: input.value };
  }

  goToProfile(index) {
    // this.router.navigateByUrl("", { skipLocationChange: true }).then(() =>
    //   this.router.navigate(["all"]));
  }

  getOtherImageClicked(index) {
    this.mainImage = this.oneFeed[0].image_Of_Feed_Key[index].image_Url;
  }

  clickedStory(index) {
    // this.oneFeedData.push(this.oneFeed[index]);
    // this.feedService.passFeedToHome(this.oneFeedData);
    // // this.router.navigate(["home/"+index]);
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() =>
      this.router.navigate(["home/" + index]));
  }

  isReply = 0;
  commentIndex = 0;
  postNewComment(newComment) {
    if (this.isReply == 1) {
      this.comments[this.commentIndex].allReplies.push(
        {
          commentImage: "https://static.toiimg.com/photo/64253221.cms",
          commentBy: "Kratika Chourasiya",
          commentBody: newComment.value,
          date: new Date()
        }
      );
      this.isReply = 0;
    } else {
      this.comments.push(
        {
          commentImage: "https://avatars0.githubusercontent.com/u/18455699?s=460&v=4",
          commentBy: "Amit Saxena",
          commentBody: newComment.value,
          date: new Date()
        }
      );
    }
  }

  @ViewChild("newComment") newComment: ElementRef
  replyToComment(index): void {
    this.newComment.nativeElement.focus();
    this.isReply = 1;
    this.commentIndex = index;
  }

  goToProfilePage(profile_Key) {
    this._passDataToComponent.profileToGoMethod(profile_Key);
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() =>
      this.router.navigate(["Profile/" + profile_Key]));
  }

}