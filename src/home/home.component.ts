import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { AlertService, UserService, AuthenticationService } from '../_services';
import { User } from '../_models';
import { first } from 'rxjs/operators';

@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.less'],
    providers: [DatePipe]
})
export class HomeComponent implements OnInit {
    feedbackForm: FormGroup;
    feedbackForm2: FormGroup;
    dateNow = new  Date();
    dateNowStr = '';
    isAccept: boolean;
    loading = false;
    submitted = false;
    returnUrl: string;

    currentUser: User;
    color = 'accent';
    get isAuth() { return this.authenticationService.currentUserValue === null };
    get f() { return this.feedbackForm.controls; }

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private datePipe: DatePipe,
        private authenticationService: AuthenticationService,
        private cookieService: CookieService,
        private alertService: AlertService,
        private userService: UserService,
    ) {
        this.dateNowStr = datePipe.transform(this.dateNow, 'yyyy');
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.isAccept = this.checkCookie();
        if(this.checkCookie() || !this.isAuth) {
            this.cookieService.set('isAccept', 'yes');
        }
     }

    ngOnInit() 
    {
        initStyles();
        document.addEventListener('click', onClickTab, false);

        this.feedbackForm = this.formBuilder.group(
            {
                fullName: ['', Validators.required],
                email: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') 
                ])],
                message: ['', Validators.required]
            }
        );

        this.feedbackForm2 = this.formBuilder.group(
            {
                message: ['', Validators.required]
            }
        );
    }

    getEmailErrorMessage() {
        return this.feedbackForm.controls.email.hasError('required') ? 'You must enter a value' : 'Not a valid email';
    }
    project() {
        this.router.navigate(['/project']);
    }
    cookieClose() {
        let el = document.getElementsByClassName('cookie-show')[0] as HTMLElement;
        el.classList.add('cookie');
        this.cookieService.set('isAccept', 'yes');
    }
    onSubmit() {
        this.submitted = true;

        this.alertService.clear();

        if (this.feedbackForm.invalid) {
            return;
        }

        let formData = new FormData();
        formData.append("fullname", this.feedbackForm.controls.fullName.value);
        formData.append("email", this.feedbackForm.controls.email.value);
        formData.append("message", this.feedbackForm.controls.message.value);
        
        this.userService.getAdminEmails()
        .pipe(first())
        .subscribe(data => {
            formData.append("amails", <string>data);
            this.userService.sendMessage(formData)
            .pipe(first())
            .subscribe(data => {
                this.alertService.success('Message send', true);
                this.loading = true;            
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
            this.feedbackForm.reset();
        },  error => {
            console.log(error);
        });
    }
    onSubmit2() {
        this.submitted = true;

        this.alertService.clear();

        if (this.feedbackForm2.invalid) {
            return;
        }

        let formData = new FormData();
        formData.append("fullname", this.currentUser.fullName);
        formData.append("email", this.currentUser.email);
        formData.append("message", this.feedbackForm2.controls.message.value);
        this.userService.getAdminEmails()
        .pipe(first())
        .subscribe(data => {
            formData.append("amails", <string>data);
            this.userService.sendMessage(formData)
            .pipe(first())
            .subscribe(res => {
                this.alertService.success('Message send', true);
                this.loading = true;            
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            })
            this.feedbackForm2.reset();
        },  error => {
            console.log(error);
        });
    }
    checkCookie() : boolean {
        if (!this.isAuth) {                
            return false;
        }
        if (this.cookieService.check('isAccept')) {
            return false;
        }
        return true;
    }
 }

 function initStyles() : void {
    let tab = document.getElementsByClassName('mat-tab-header')[0] as HTMLElement;
    tab.style.border = '0';
    setTimeout(() => {
        let tabLinks = document.getElementsByClassName('mat-tab-label-content') as HTMLCollectionOf<HTMLElement>;
        for (let index = 0; index < tabLinks.length; index++) {
            let element = tabLinks[index];
            element.style.color = "white";
        }
    }, 500);
 }
 function onClickTab(event) : void {
    if(event.target.className.includes('mat-tab-label-')) {
        let name = event.target.innerText;
        if(name === 'SUBMIT') {
            document.getElementById('one-t').style.display = 'flex';
            document.getElementById('two-t').removeAttribute('style');
            document.getElementById('three-t').removeAttribute('style');

        } else if (name === 'ADVISOR SUPPORT') {
            document.getElementById('one-t').removeAttribute('style');
            document.getElementById('three-t').removeAttribute('style');
            document.getElementById('two-t').style.display = 'flex';
        } else {
            document.getElementById('one-t').removeAttribute('style');
            document.getElementById('two-t').removeAttribute('style');
            document.getElementById('three-t').style.display = 'flex';
        }
    }
 }