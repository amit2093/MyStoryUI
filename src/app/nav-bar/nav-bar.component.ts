import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
   
  }

  goToMessages() {
    // get name of icon and use if/else for navigation between message/setting etc.
    this.router.navigate(["Message"]);
  }

  goToAdminSettings() {
    this.router.navigate(["Setting"]);
  }

  goToNotification() {
    this.router.navigate(["notification"]);
  }

}


