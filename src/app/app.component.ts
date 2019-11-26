import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

import '../_content/app.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    currentUser: User;
    get isAuth() { return this.authenticationService.currentUserValue === null };

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
    // astivateToggle() {
    //     let button = document.getElementsByClassName('toggle_btn')[0] as HTMLElement;
    //     if(button.getAttribute('style')) {
    //         button.removeAttribute('style');
    //     } else {
    //         button.style.transform = 'rotate(45deg)';
    //     }
    // }
}