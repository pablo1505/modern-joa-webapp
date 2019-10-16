import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   slideInAnimation
  //   // animation triggers go here
  // ]
})
export class AppComponent {
  title = 'modern-joa-webapp';

  constructor(
    private router: Router
  ) {}

  home() {
    return;
  }

  aboutUs() {
    this.router.navigate(['about-us/']);
    return;
  }

  login() {
    return;
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
