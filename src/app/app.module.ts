import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import {WebcamModule} from 'ngx-webcam';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPipePipe } from 'src/search-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IndexLandingComponent } from './index-landing/index-landing.component';
import { FeedToHomeService } from 'src/feed-to-home-service.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { MessagaeComponent } from './messagae/messagae.component';
import { GetFirstWordOfNamePipe } from 'src/get-first-word-of-name.pipe';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SearchBarComponent,
    SearchPipePipe,
    IndexLandingComponent,
    AdminComponent,
    AdminDashboardComponent,
    MessagaeComponent,
    GetFirstWordOfNamePipe,
    NotificationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    WebcamModule
  ],
  entryComponents: [
    AdminDashboardComponent
  ],
  providers: [FeedToHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
