import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>Welcome</a>
        <ul class='navbar-nav'>
          <li class='nav-item'><a class='nav-link' routerLinkActive='active'
                [routerLink]="['/home']">Home</a>
          </li>
          <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}"
                [routerLink]="['/login']">Login</a>
          </li>
          <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}"
                [routerLink]="['/signUp']">Register</a>
          </li>
        </ul>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}
