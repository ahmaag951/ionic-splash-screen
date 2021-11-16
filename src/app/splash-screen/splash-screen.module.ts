const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
  },
];
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
})
export class SplashScreenModule {}
