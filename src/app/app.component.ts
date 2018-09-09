import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AuthService } from '../service/auth.service';
import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  // make HelloIonicPage the root (or first) page
  rootPage ;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private auth: AuthService) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    console.log("before afauth")
    
    this.auth.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = MenuPage;
        } else {
          this.rootPage = HelloIonicPage;
        }
      },
      () => {
        this.rootPage = HelloIonicPage;
      }
    );
    console.log("aftret afauth")


  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HelloIonicPage);
  }
  
logout() {
	this.menu.close();
	this.auth.signOut();
	this.nav.setRoot(HelloIonicPage);
}
}
