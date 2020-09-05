import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLandingComponent } from './app/index-landing/index-landing.component';
import { AdminComponent } from './app/admin/admin.component';
import { MessagaeComponent } from './app/messagae/messagae.component';
import { NotificationComponent } from './app/notification/notification.component';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: IndexLandingComponent
  },
  {
    path: "home/:id",
    component: HomeComponent
  },
  {
    path: "Setting",
    component: AdminComponent
  },
  {
    path: "Message",
    component: MessagaeComponent
  },
  {
    path: "notification",
    component: NotificationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
