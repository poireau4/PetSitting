import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {ShowListPage} from '../pages/show-list/show-list';
import {ShowDetailPage} from '../pages/show-detail/show-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {ProfilePage} from '../pages/profile/profile';

import {ShowService} from "../providers/show-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ProfilePage,
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage
  ],
  imports: [  
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ProfilePage,
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShowService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
