import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllGetMethodsService } from 'src/all-get-methods.service';
import { FeedToHomeService } from 'src/feed-to-home-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-landing',
  templateUrl: './index-landing.component.html',
  styleUrls: ['./index-landing.component.css']
})
export class IndexLandingComponent implements OnInit {
  private oneFeed = [];
  private allFeeds: any;

  THIRD_PARTY_API_DATA_FOR_TEST: Array<any>;
  popularFeeds: {};

  constructor(private router: Router,
    private http: HttpClient,
    private _allGetMethods: AllGetMethodsService,
    private feedService: FeedToHomeService) {

    document.getElementById("main").style.marginLeft = "0px";
  }


  ngOnInit() {
    // this._allGetMethods.getAllFeeds().subscribe(                            
    //   data => {this.allFeeds = data;}
    // );  

    this.http.get('./assets/index-landingPage.json').subscribe(
      data => { this.allFeeds = data; }
    );

    this._allGetMethods.getLatestStories().subscribe(
      data => { this.popularFeeds = data; }
    );
  }


  clickedStory(index) {
    this.oneFeed.push(this.allFeeds[index]);
    this.feedService.passFeedToHome(this.oneFeed);
    // this.router.navigate(["home/"+index]);

    this.router.navigateByUrl("", { skipLocationChange: true }).then(() =>
      this.router.navigate(["home/" + index]));
  }

}
