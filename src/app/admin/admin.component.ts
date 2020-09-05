import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { MessagaeComponent } from '../messagae/messagae.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef; 
  
  showMainAdminContent = true;
  isSidebarOpen: boolean = true;

  constructor( private componentFactoryResolver: ComponentFactoryResolver ) {
  }
  ngOnInit() {
    document.getElementById("mySidenav").style.width = "60px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main1").style.marginLeft = "0px";
    this.isSidebarOpen = false;
    this.showMainAdminContent = true;
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(AdminDashboardComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  openCloseSidebar() {
    if (this.isSidebarOpen) {
      this.isSidebarOpen = false;
      document.getElementById("mySidenav").style.width = "60px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("main1").style.marginLeft = "0px";
      document.getElementById("sideLinks").style.visibility = "hidden";
      document.getElementById("sideLinks2").style.visibility = "hidden";
      document.getElementById("sideLinks3").style.visibility = "hidden";
      document.getElementById("sideLinks4").style.visibility = "hidden";
      document.getElementById("sideLinks5").style.visibility = "hidden";
      document.getElementById("sideLinks6").style.visibility = "hidden";

    } else {
      this.isSidebarOpen = true;
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main1").style.marginLeft = "170px";
      document.getElementById("main").style.marginLeft = "170px";
      document.getElementById("sideLinks").style.visibility = "visible";
      document.getElementById("sideLinks2").style.visibility = "visible";
      document.getElementById("sideLinks3").style.visibility = "visible";
      document.getElementById("sideLinks4").style.visibility = "visible";
      document.getElementById("sideLinks5").style.visibility = "visible";
      document.getElementById("sideLinks6").style.visibility = "visible";
    }
  }
 
  openToDoList(){
    // this.viewContainerRef.clear();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(ToDoListComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
  }

  openDeshboard(){
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(AdminDashboardComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  openMessage(){
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(MessagaeComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  openAccountSetting(){
    // this.viewContainerRef.clear();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(AccountSettingComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
  }

  openPrivacySetting(){
    // this.viewContainerRef.clear();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(PrivacySettingComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
  }

  openFeedback(){
    // this.viewContainerRef.clear();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(FeedbackComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
  }

  openNotification(){
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(NotificationComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  openAddNewPostComponent(){
    // this.viewContainerRef.clear();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(AddNewPostComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();
  }
}
