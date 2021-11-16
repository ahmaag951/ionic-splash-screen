import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  bounceOutDownOnLeaveAnimation,
  collapseAnimation,
  fadeInLeftOnEnterAnimation,
  fadeInUpOnEnterAnimation,
  fadeOutUpAnimation,
  fadeOutUpBigAnimation,
  fadeOutUpBigOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
  lightSpeedInOnEnterAnimation,
  rubberBandAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutUpOnLeaveAnimation,
} from 'angular-animations';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    slideInRightOnEnterAnimation({
      duration: 1000,
      // delay: 1000,
      // translate: '100px',
    }),
    fadeInLeftOnEnterAnimation({
      duration: 1000,
      delay: 1000,
      translate: '100px',
    }),
    // slideInUpOnEnterAnimation({
    //   duration: 2000,
    //   delay: 1000,
    //   translate: '100px',
    // }),
    // fadeOutUpOnLeaveAnimation({
    //   duration: 1000,
    //   delay: 2000,
    //   translate: '700px',
    // }),
    fadeOutUpOnLeaveAnimation({
      anchor: 'enter',
      duration: 2000,
      delay: 2000,
      translate: '300px',
    }),
    // trigger('slideInOut', [
    //   transition(':enter', [
    //     animate('2000ms ease-out', style({ transform: 'translateY(-100%)' })),
    //   ]),
    //   transition(':leave', [
    //     style({ transform: 'translateY(-100%)' }),
    //     animate('2000ms ease-out', style({ transform: 'translateY(0%)' })),
    //   ]),
    // ]),
    // fadeInUpOnEnterAnimation({
    //   anchor: 'enter',
    //   duration: 3000,
    //   delay: 100,
    //   translate: '30px',
    // }),
    // bounceOutDownOnLeaveAnimation({
    //   anchor: 'leave',
    //   duration: 3000,
    //   delay: 200,
    //   translate: '40px',
    // }),
  ],
})
export class SplashScreenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
