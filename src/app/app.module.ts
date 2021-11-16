import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { SplashScreenModule } from './splash-screen/splash-screen.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SplashScreenModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorHandlingInterceptor,
    //   multi: true,
    // },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    Storage,
    SplashScreen,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);
// }
