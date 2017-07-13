import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import {myRoutes} from './app.routes';
import {DbService} from './db.service';
import {ProfileComponent} from './profile/profile.component';

import {ProfileGuard} from './profile/profile-guard';
import {ErrorComponent} from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [ProfileGuard, DbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
