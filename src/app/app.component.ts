import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = false;
  showApp = false;
  localStorage;
  constructor(
    private splashScreen: SplashScreen,
    private platform: Platform
  ) {
    this.initializeApp();
    this.localStorage = localStorage;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.showSplash = true;

      timer(2000).subscribe(() => {
        this.showSplash = false;
        this.showApp = true;
        // if (localStorage.getItem('lang') === 'en') {
        //   this.translate.setDefaultLang('en');
        // } else if (localStorage.getItem('lang') === 'ar') {
        //   this.translate.setDefaultLang('ar');
        // } else {
        //   this.translate.setDefaultLang('en');
        //   localStorage.setItem('lang', 'en');
        // }
      });
      // if (MobileAccessibility) {
      //   // MobileAccessibility.setTextZoom(100);
      //   MobileAccessibility.usePreferredTextZoom(false);
      // }
    });
  }
}
